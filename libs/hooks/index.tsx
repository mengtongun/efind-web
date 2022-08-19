import { useUser } from '@supabase/auth-helpers-react';
import { ICategory } from 'interfaces';
import { getCategories } from 'libs/providers/supabase-client';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);
  const { user } = useUser();
  const updateIsAuth = () => {
    setIsAuth(!!user);
  };
  useEffect(() => {
    updateIsAuth();
    return () => {};
  }, []);

  return { isAuth };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[] | undefined>(null);
  const updateCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  useEffect(() => {
    updateCategories();
    return () => {};
  }, []);
  return { categories };
};
