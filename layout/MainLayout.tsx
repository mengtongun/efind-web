import { Header, SuggestList } from '@/components';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const hideSuggestList = ['/signin', '/signup'].includes(router.pathname);
  return (
    <div className="h-screen w-screen">
      <Header />

      {!hideSuggestList && <SuggestList />}
      {children}
    </div>
  );
};

export default MainLayout;
