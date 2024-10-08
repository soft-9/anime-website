import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'; 

interface Anime {
  title: string;
  link: string;
  img: string;
}

interface AnimeTableProps {
  animes: Anime[];
}

const AnimeTable: React.FC<AnimeTableProps> = ({ animes }) => {
  if (animes.length === 0) {
    return <div>No anime found</div>;
  }

  return (
    <motion.table
      className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-100">Image</th>
          <th className="py-2 px-4 bg-gray-100">Title</th>
        </tr>
      </thead>
      <tbody>
        {animes.map((anime, index) => (
          <motion.tr
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-t"
          >
            <td className="py-2 px-4">
              <Image
                src={anime.img}
                alt={anime.title}
                width={64} 
                height={64} 
                className="object-cover rounded"
              />
            </td>
            <td className="py-2 px-4">
              <a href={anime.link} className="text-blue-500 hover:underline">
                {anime.title}
              </a>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default AnimeTable;
