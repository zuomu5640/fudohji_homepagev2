import { useCallback } from 'react';

export const useScrollOffset = (offset: number = 80) => {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    
    const element = document.querySelector(href);
    if (!element) return;
    
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [offset]);
};