import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';

interface Anime {
  title: string;
  link: string;
  img: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoriesParam = searchParams.get('categories');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = (page - 1) * limit;

  if (!categoriesParam) {
    return NextResponse.json({ error: 'Categories are required' }, { status: 400 });
  }

  const categories = categoriesParam.split(',').map(cat => `/${cat.replace(/^\/+/, '')}`);
  const allAnimes: Anime[] = [];
  const seenTitles = new Set<string>();

  for (const category of categories) {
    let currentPage = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      const url = `https://anime3rb.com${category.startsWith('/') ? category : '/' + category}?page=${currentPage}`;
      console.log('Fetching URL:', url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const animeLinks = $('main section div div div');
        const pageAnimes: Anime[] = [];

        animeLinks.each((index, element) => {
          const title = $(element).find('div div a h2').text().trim();
          const link = $(element).find('div div a').attr('href') || '';
          const img = $(element).find('div div a img').attr('src') || '';

          if (title && link && img && !seenTitles.has(title)) {
            pageAnimes.push({ title, link, img });
            seenTitles.add(title);
          }
        });

        if (pageAnimes.length > 0) {
          allAnimes.push(...pageAnimes);
          currentPage += 1;
        } else {
          hasMorePages = false;
        }

        if (allAnimes.length >= offset + limit) break;

      } catch (error) {
        console.error('Error fetching or parsing the page:', error);
        hasMorePages = false;
      }
    }
  }

  const paginatedAnimes = allAnimes.slice(offset, offset + limit);

  return NextResponse.json(paginatedAnimes);
}
