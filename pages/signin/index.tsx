import { GetServerSideProps } from 'next';

import { Auth, Button, IconLock, IconLogIn, IconPhone, IconSave, IconSmartphone, Input } from '@supabase/ui';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const { user, error } = useUser();
  const [data, setData] = useState<string>();
  const [phoneForm, setPhoneForm] = useState<string>();
  const [codeForm, setCodeForm] = useState<string>();
  const [showSignPhone, setShowSignPhone] = useState<boolean>(false);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  useEffect(() => {
    function loadData() {
      console.log('load login');
      setData('Okay');
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  const onShowSignPhone = () => {
    setShowSignPhone(!showSignPhone);
  };
  const onGetCode = async () => {
    if (!phoneForm) {
      notification.error({
        message: 'Error',
        description: 'Please enter your phone number',
      });
      return;
    }
    setIsCounting(true);
    const formParam = {
      phone: '855' + phoneForm,
    };
    await supabaseClient.auth
      .signIn(formParam)
      .then((res) => {
        setShowSignPhone(true);
        notification.success({
          message: 'Success',
          description: 'We have sent an OTP to your phone',
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Error',
          description: err.message,
        });
      });
  };

  const onVerifyOTP = () => {
    if (!codeForm) return;

    supabaseClient.auth
      .verifyOTP({ token: codeForm, phone: '855' + phoneForm })
      .then(() => {
        notification.success({
          message: 'Verify OTP',
          description: 'OTP verified',
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Verify OTP',
          description: err.message,
        });
      });
  };

  const deadline = Date.now() + 1000 * 60;
  console.log(phoneForm);
  if (!user)
    return (
      <>
        {error && <p key="error-msg">{error.message}</p>}

        {showSignPhone ? (
          <div key="sign-phone" className="max-w-lg m-auto pt-10">
            <Input
              key="phone"
              onChange={(e) => setPhoneForm(e.target.value)}
              icon={<IconPhone />}
              type="tel"
              label="Phone Number 🇰🇭"
              placeholder="Enter your phone"
              actions={[
                isCounting ? (
                  <Countdown
                    valueStyle={{ fontSize: '1em', padding: '0.5em' }}
                    value={deadline}
                    format="ss"
                    onFinish={() => setIsCounting(false)}
                  />
                ) : (
                  <Button onClick={onGetCode} disabled={isCounting} type="default" icon={<IconSmartphone />}>
                    Send SMS
                  </Button>
                ),
              ]}
            />
            <Input
              key="code"
              className="mt-4"
              icon={<IconLock />}
              label="Code"
              onChange={(e) => setCodeForm(e.target.value)}
              actions={[
                <Button onClick={onVerifyOTP} type="default" icon={<IconLogIn />}>
                  Submit
                </Button>,
              ]}
            />
          </div>
        ) : (
          <div key="auth-sign" className="max-w-lg m-auto pt-10">
            <Auth
              supabaseClient={supabaseClient}
              magicLink
              style={{ color: 'blueviolet' }}
              providers={['google', 'github']}
            />
          </div>
        )}
        <div key="btn-phone-sign" className=" max-w-lg m-auto text-center">
          <button onClick={onShowSignPhone} className="m-4  p-2 text-gray-500 font-bold hover:text-green-500 ">
            {showSignPhone ? 'SignIn with Email' : 'SignIn with Phone'}
          </button>
        </div>
      </>
    );
  const router = useRouter();
  router.push('/');
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
  return <AuthPage />;
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
