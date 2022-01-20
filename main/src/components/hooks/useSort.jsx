import React, { useMemo } from 'react';

export const useSorted = (posts, sort) =>{
    const sortedPosts = useMemo(() => {
    if(sort){
      return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
}

export const useQuery = (posts, sort, query) =>{
    const sorted = useSorted(posts, sort)
    const sortedAnDquery = useMemo(() => {
        return sorted.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sorted])
    return sortedAnDquery;
}