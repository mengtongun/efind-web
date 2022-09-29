import { GetServerSideProps } from 'next';

import { Auth, Button, IconLock, IconLogIn, IconPhone, IconSmartphone, Input } from '@supabase/ui';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const router = useRouter();
  const { user, error } = useUser();
  const [data, setData] = useState<string>();
  const [phoneForm, setPhoneForm] = useState<string>();
  const [codeForm, setCodeForm] = useState<string>();
  const [showSignPhone, setShowSignPhone] = useState<boolean>(false);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [getCodeLoading, setGetCodeLoading] = useState<boolean>(false);

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
    const pattern = /^\d{9,10}$/;
    if (!pattern.test(phoneForm)) {
      notification.error({
        message: 'Error',
        description: 'Please enter a valid phone number',
      });
      return;
    }
    const formParam = {
      phone: '855' + phoneForm,
    };
    setGetCodeLoading(true);

    await supabaseClient.auth
      .signIn(formParam)
      .then(() => {
        setIsCounting(true);
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
        setGetCodeLoading(false);
      });
  };

  const onVerifyOTP = () => {
    if (!codeForm) {
      notification.error({
        message: 'Error',
        description: 'Please enter your OTP',
      });
      return;
    }
    supabaseClient.auth
      .verifyOTP({ token: codeForm, phone: '855' + phoneForm })
      .then(() => {
        notification.success({
          message: 'Verify OTP',
          description: 'OTP verified',
        });
        return router.push('/');
      })
      .catch((err) => {
        notification.error({
          message: 'Verify OTP',
          description: err.message,
        });
      });
  };

  const deadline = Date.now() + 1000 * 60;
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
                  <Button
                    onClick={onGetCode}
                    disabled={isCounting}
                    loading={getCodeLoading}
                    type="default"
                    icon={<IconSmartphone />}
                    key="get-code-btn"
                  >
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
            />
            <div key="sign-button" className="flex justify-center">
              <Button className="m-4 text-blue-500" onClick={onVerifyOTP} type="default" icon={<IconLogIn />}>
                Sign In
              </Button>
            </div>
          </div>
        ) : (
          <div key="auth-sign" className="max-w-lg m-auto pt-10">
            <Auth
              supabaseClient={supabaseClient}
              magicLink
              style={{ color: 'blueviolet' }}
              providers={['google', 'github']}
              key="auth"
            />
          </div>
        )}
        <div key="btn-phone-sign" className=" max-w-lg m-auto text-center">
          <button onClick={onShowSignPhone} className="m-4  p-2 text-gray-500 font-bold hover:text-blue-500 ">
            {showSignPhone ? 'SignIn with Email' : 'SignIn with Phone'}
          </button>
        </div>
      </>
    );
  router.push('/');
  return <p key="loading">Loading...</p>;
};

export default AuthPage;
