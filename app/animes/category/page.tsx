import axios from "axios";
import cheerio from "cheerio";

interface CategoryPageProps {
  searchParams: {
    category: string;
  };
}

interface Anime {
  title: string;
  link: string;
  img: string;
}

const CategoryPage = async ({ searchParams }: CategoryPageProps) => {
  const { category } = searchParams;

  const url = `https://anime3rb.com${category.startsWith('/') ? category : '/' + category}`;
  console.log('Fetching URL:', url);

  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const animeLinks = $('main section div div div');

  const animes: Anime[] = [];

  animeLinks.each((index, element) => {
    if (index >= 2) { 
      const title = $(element).find('div div a h2').text().trim();
      const link = $(element).find('div div a').attr('href') || '';
      const img = $(element).find('div div a img').attr('src') || '';
      animes.push({ title, link, img });
    }
  });

  return (
    <div>
      <h1>Selected Animes</h1>
      <ul>
        {animes.map((anime, index) => (
          <li key={index}>
            <a href={anime.link}>
              <img src={anime.img} alt={anime.title} />
              <h2>{anime.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
