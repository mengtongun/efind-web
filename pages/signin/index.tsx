import { SignIn } from '@/components';
import { GetServerSideProps } from 'next';

import { Auth } from '@supabase/ui';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const { user, error } = useUser();
  const [data, setData] = useState<String>();

  useEffect(() => {
    function loadData() {
      console.log('load login');
      setData('Okay');
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <div className="max-w-lg m-auto pt-10">
          <Auth
            supabaseClient={supabaseClient}
            magicLink
            style={{ color: 'blueviolet' }}
            providers={['google', 'github']}
          />
        </div>
      </>
    );

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

const SignInPage = () => {
  return <LoginPage />;
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
