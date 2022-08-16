import { SignIn } from '@/components';
import authProvider from 'libs/auth-provider';
import { GetServerSideProps } from 'next';

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const isAuth = authProvider.checkAuth();

  return {
    props: {},
    redirect: {
      permanent: false,
      destination: isAuth ? '/' : '/signin',
    },
  };
};
