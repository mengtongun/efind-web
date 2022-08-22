import { Header, SuggestList } from '@/components';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const hideSuggestList = ['/signin', '/signup', '/terms-of-service', '/privacy-policy'].includes(router.pathname);
  return (
    <div className="h-screen w-screen">
      <Header />

      {!hideSuggestList && <SuggestList />}
      {children}
      <div style={{ padding: '16px' }}>
        *
        <a style={{ paddingRight: '16px' }} href="/terms-of-service" target="_blank">
          Terms of Service
        </a>
        *
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
