/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import { Drawer, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { CategoriesContext } from 'pages/_app';
import { Fragment, useContext, useState } from 'react';

export default function Header() {
  const { user } = useUser();
  const categories = useContext(CategoriesContext);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onSignOut = () => {
    setVisible(false);
    supabaseClient.auth.signOut();
  };

  return (
    <Popover className="relative bg-white z-50">
      <Drawer
        title="Category"
        headerStyle={{
          textAlign: 'center',
          fontSize: '2.5rem',
        }}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          {categories &&
            categories.map((item) => (
              <Menu.Item key={item.id}>
                <Link href={`/category/${item.id}`}>
                  <a className="flex" onClick={onClose}>
                    <Image src={item.icon} objectFit="contain" width={50} height={25} />
                    <p>{item.name}</p>
                  </a>
                </Link>
              </Menu.Item>
            ))}
        </Menu>
      </Drawer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/#">
              <span className="sr-only">Workflow</span>
              <Image width={48} height={48} className="h-8 w-auto sm:h-10" src="/images/efind_official.png" alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/popular">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">Popular</a>
            </Link>
            <Link href="/latest">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">Latest</a>
            </Link>
            <a onClick={showDrawer} className="text-base font-medium text-gray-500 hover:text-gray-900">
              All
            </a>
          </Popover.Group>
          {user ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                onClick={onSignOut}
                type="button"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/signin">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
              </Link>
              <Link href="/signup">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image
                    width={48}
                    height={48}
                    className="h-8 w-auto"
                    src="/images/efind_official.png"
                    alt="Workflow"
                  />
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700  ">
                  Popular
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Latest
                </a>
                {categories &&
                  categories.map((item) => (
                    <Link href={`/category/${item.id}`} key={item.id}>
                      <a className="text-base font-medium text-gray-500 hover:text-gray-900">{item.name}</a>
                    </Link>
                  ))}
              </div>
              {!user && (
                <div>
                  <Link href="/signup">
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link href="/signin">
                      <a className="text-indigo-600 hover:text-indigo-500">Sign in</a>
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
