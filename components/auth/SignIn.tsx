import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';

import { Provider } from '@supabase/supabase-js';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { getURL } from 'libs/functions';
import { Button, Input } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Loading } from '@nextui-org/react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: '',
  });
  const router = useRouter();
  const { user } = useUser();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    const { error } = await supabaseClient.auth.signIn({ email, password }, { redirectTo: getURL() });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.',
      });
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signIn({ provider });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)
    return (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
          <div className="flex justify-center pb-12 ">{/* <Logo width="64px" height="64px" /> */}</div>
          <div className="flex flex-col space-y-4">
            {message.content && (
              <div
                className={`${message.type === 'error' ? 'text-pink-500' : 'text-blue-500'} border ${
                  message.type === 'error' ? 'border-pink-500' : 'border-blue-500'
                } p-3`}
              >
                {message.content}
              </div>
            )}

            {!showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    const v = e.target.value;
                    setEmail(v);
                  }}
                  required
                />
                <Button htmlType="submit" loading={loading} disabled={!email.length}>
                  Send magic link
                </Button>
              </form>
            )}

            {showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    const v = e.target.value;
                    setEmail(v);
                  }}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    const v = e.target.value;
                    setPassword(v);
                  }}
                  required
                />
                <Button
                  className="mt-1"
                  htmlType="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Sign in
                </Button>
              </form>
            )}

            <span className="pt-1 text-center text-sm">
              <a
                href="#"
                className="text-zinc-200 text-accent-9 hover:underline cursor-pointer"
                onClick={() => {
                  if (showPasswordInput) setPassword('');
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                {`Or sign in with ${showPasswordInput ? 'magic link' : 'password'}.`}
              </a>
            </span>

            <span className="pt-1 text-center text-sm">
              <span className="text-zinc-200">Don&apos;t have an account? </span>
              <Link href="/signup">
                <a className="text-accent-9 font-bold hover:underline cursor-pointer">Sign up.</a>
              </Link>
            </span>
          </div>

          <div className="flex items-center my-6">
            <div className="border-t border-zinc-600 flex-grow mr-3" aria-hidden="true"></div>
            <div className="text-zinc-400">Or</div>
            <div className="border-t border-zinc-600 flex-grow ml-3" aria-hidden="true"></div>
          </div>

          <Button htmlType="submit" disabled={loading} onClick={() => handleOAuthSignIn('github')}>
            <GithubOutlined />
            <span className="ml-2">Continue with GitHub</span>
          </Button>
        </div>
      </div>
    );

  return (
    <div className="m-6">
      <Loading type="spinner" />
    </div>
  );
};

export default SignIn;
