import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case '/': {
        return 'pink';
      }
      case '/about': {
        return 'orange';
      }
      default: {
        return '';
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);
}