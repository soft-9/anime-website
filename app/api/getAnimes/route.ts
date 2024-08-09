import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';

interface Anime {
  title: string;
  link: string;
  img: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoriesParam = searchParams.get('categories') || 'allmecha'; // Default category if none is selected
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const searchTerm = searchParams.get('searchTerm') || ''; // Get search term
  const offset = (page - 1) * limit;

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

  // Filter based on searchTerm
  const filteredAnimes = allAnimes.filter(anime =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedAnimes = filteredAnimes.slice(offset, offset + limit);

  return NextResponse.json(paginatedAnimes);
}
