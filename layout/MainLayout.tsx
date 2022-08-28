import { Header, SuggestList } from '@/components';
import { useRouter } from 'next/router';
const excludeRoutes = ['/signin', '/signup', '/terms-of-service', '/privacy-policy', '/about'];
const MainLayout = ({ children }) => {
  const router = useRouter();
  const hideSuggestList = excludeRoutes.includes(router.pathname);
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Header />

      {!hideSuggestList && <SuggestList />}
      <div className="h-full overflow-y-auto">
        {children}
        <footer style={{ padding: '16px' }}>
          *
          <a style={{ paddingRight: '16px' }} href="/terms-of-service" target="_blank">
            Terms of Service
          </a>
          *
          <a style={{ paddingRight: '16px' }} href="/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          *
          <a href="/about" target="_blank">
            About Us
          </a>
        </footer>
        <p style={{ paddingBottom: '140px', paddingLeft: '16px' }}>
          @
          <span className="font-extrabold  font-mono">
            <a href="/" target="_blank">
              eFind
            </a>
          </span>{' '}
          2021
        </p>
      </div>
    </div>
  );
};

export default MainLayout;
