'use client';

import { useState } from 'react';
import HomeToggleZone from './HomeToggleZone';
import AllPosts from './all-posts';
import useGetAllPosts from '@/hooks/query/useGetAllPosts';
import TrendingPosts from './trending-posts';

export type TrendingType = 'trend' | 'all';

export default function HomeClientPage() {
  const [isTrending, setIsTrending] = useState<TrendingType>('trend');
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetAllPosts(currentPage);

  const handleToggle = (prev: TrendingType) => {
    setIsTrending(prev);
  };

  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
      <HomeToggleZone handleToggle={handleToggle} isTrending={isTrending} />

      {isTrending === 'trend' ? (
        <TrendingPosts />
      ) : (
        <AllPosts
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
}
