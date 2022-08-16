import { ICategory } from 'interfaces';
import authProvider from 'libs/auth-provider';
import { supabase } from 'libs/supabase';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);
  const updateIsAuth = async () => {
    await authProvider
      .checkAuth()
      .then((res) => {
        setIsAuth(res);
      })
      .catch((err) => {
        setIsAuth(false);
        console.log(err);
      });
  };
  useEffect(() => {
    updateIsAuth();
    return () => {};
  }, []);

  return { isAuth };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[] | undefined>(null);
  const updateCategory = async () => {
    await supabase
      .from('category')
      .select('*')
      .then((res) => {
        setCategories(res.data);
      });
  };
  useEffect(() => {
    updateCategory();
    return () => {};
  }, []);
  return { categories };
};
