import { Header, SuggestList } from '@/components';

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />

      <SuggestList />
      {children}
    </div>
  );
};

export default MainLayout;
