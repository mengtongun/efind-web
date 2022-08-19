import { SignUp } from '@/components';
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
  return {
    props: {},
  };
};
