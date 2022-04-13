import { Header } from '@/components';

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
