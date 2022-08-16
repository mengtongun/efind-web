import { Header, SuggestList } from '@/components';

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="  w-full">
        <SuggestList />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
