'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CategorySelect from '@/components/CategorySelect';
import SearchBar from '@/components/SearchBar';
import AnimeTable from '@/components/AnimeTable';

interface Category {
  value: string;
  label: string;
}

interface Anime {
  title: string;
  link: string;
  img: string;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMorePages, setHasMorePages] = useState<boolean>(true);
  
  const initialLoad = useRef<boolean>(true);
  
  const { ref: loadMoreRef, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          'http://localhost:3000/api/getCategories'
        );
        const formattedCategories = response.data.map((category) => ({
          value: category.link,
          label: category.title,
        }));
        setCategories(formattedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchAnimes = useCallback(async () => {
    if (selectedCategories.length === 0 || loading || !hasMorePages) return;

    setLoading(true);
    try {
      const categoriesQuery = selectedCategories
        .map((cat) => cat.value)
        .join(',');
      const response = await axios.get<Anime[]>(
        'http://localhost:3000/api/getAnimes',
        {
          params: {
            categories: categoriesQuery,
            page: currentPage,
            limit: 10,
          },
        }
      );

      if (response.data.length === 0) {
        setHasMorePages(false);
      } else {
        setAnimes((prevAnimes) => [...prevAnimes, ...response.data]);
        setHasMorePages(true);
      }
    } catch (error) {
      console.error('Error fetching animes:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategories, currentPage, loading, hasMorePages]);

  useEffect(() => {
    if (selectedCategories.length === 0 || !initialLoad.current) return;

    fetchAnimes();
    
    initialLoad.current = false;
  }, [selectedCategories, fetchAnimes]);

  useEffect(() => {
    if (inView && hasMorePages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (currentPage === 1) return; 
    fetchAnimes();
  }, [currentPage]);

  const handleCategoryChange = (selectedOptions: Category[]) => {
    setSelectedCategories(selectedOptions as Category[]);
    setAnimes([]); 
    setCurrentPage(1);
    setHasMorePages(true); 
  };

  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Anime Categories
      </motion.h1>

      <CategorySelect
        categories={categories}
        onChange={handleCategoryChange}
      />
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <AnimeTable animes={filteredAnimes} />

      {loading && <div className="text-center mt-4">Loading...</div>}
      <div
        ref={loadMoreRef}
        className="text-center mt-4"
      >
        {hasMorePages && !loading && <div>Loading more...</div>}
        {!hasMorePages && !loading && <div>No more pages available</div>}
      </div>
    </div>
  );
};

export default Home;
