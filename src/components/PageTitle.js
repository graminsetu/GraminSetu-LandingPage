import { useEffect } from 'react';

// Utility to get page name from path
const getPageTitle = (pathname) => {
  if (pathname === '/' || pathname === '/home') return 'Empowering Rural Communities...';
  if (pathname.startsWith('/careers')) return 'Careers';
  if (pathname.startsWith('/about')) return 'About';
  if (pathname.startsWith('/blog')) return 'Blog';
  if (pathname.startsWith('/village-business-model')) return 'Village Portal';
  if (pathname.startsWith('/government-csr-business-model')) return 'Government/CSR Portal';
  if (pathname.startsWith('/business/ngo-business-model')) return 'Business/NGO Portal';
  if (pathname.startsWith('/login')) return 'Login';
  return (
    pathname
      .replace(/^\//, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Page'
  );
};

export default function PageTitle({ pathname }) {
  useEffect(() => {
    const page = getPageTitle(pathname);
    document.title = `GraminSetu${page ? ' | ' + page : ''}`;
  }, [pathname]);
  return null;
}
