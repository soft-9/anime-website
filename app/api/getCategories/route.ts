import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import cheerio from "cheerio";

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get("https://anime3rb.com/");
    const $ = cheerio.load(response.data);
    const asideLinks = $("aside div a");

    const categories: Category[] = [];
    asideLinks.each((_, element) => {
      const title = $(element).text().trim();
      const link = $(element).attr("href") || "";
      const cleanLink = link.startsWith("http") ? new URL(link).pathname : link;
      categories.push({ title, link: cleanLink });
    });

    return NextResponse.json(categories.slice(2));
  } catch (error) {
    return new NextResponse("Error fetching categories", { status: 500 });
  }
}
