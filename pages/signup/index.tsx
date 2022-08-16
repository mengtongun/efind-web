import { SignUp } from '@/components';
import authProvider from 'libs/auth-provider';
import { GetServerSideProps } from 'next';
import React from 'react';

const SignUpPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const isAuth = authProvider.checkAuth();

  return {
    props: {},
    redirect: {
      permanent: false,
      destination: isAuth ? '/' : '/signup',
    },
  };
};
