import { supabaseClient, User } from '@supabase/auth-helpers-nextjs';
import { IStore, IUser, ICategory } from 'interfaces';

const LIMIT_QUERY = 20;
export const supabase = supabaseClient;

// Example
export const getActiveStores = async (): Promise<IStore[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
    throw error;
  }

  return data || [];
};

export const updateUserName = async (user: User, name: string) => {
  await supabase
    .from<IUser>('user')
    .update({
      name: name,
    })
    .eq('id', user.id);
};

export const getStores = async (limit: number = LIMIT_QUERY): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )').limit(limit);
  error && console.log('getStores Error', error);
  return data || [];
};
export const getStoreByPage = async (page: number = 1): Promise<IStore[]> => {
  const { data, error } = await supabase
    .from('store')
    .select('* ,category:c_id ( name ) ')
    .range(page, LIMIT_QUERY * page);
  error && console.log('getStoreByPage Error', error);
  return data || [];
};

export const getStoreByCategoryId = async (id: number | string | string[]): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )').eq('c_id', id);
  error && console.log('getStoreByCategoryId Error', error);
  return data || [];
};

export const getLatestStore = async (): Promise<IStore[]> => {
  const { data, error } = await supabase
    .from('store')
    .select('* ,category:c_id ( name )')
    .order('id', { ascending: false })
    .limit(30);

  error && console.log('getLatestStore Error', error);
  return data || [];
};

export const getPopularStore = async (): Promise<IStore[]> => {
  const { data, error } = await supabase
    .from('store')
    .select('* ,category:c_id ( name )')
    .order('view_count', { ascending: false })
    .limit(30);

  error && console.log('getPopularStore Error', error);

  return data || [];
};

export const getStoreById = async (id: number | string): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )').eq('id', id);
  error && console.log('getStoreById Error', error);
  return data || [];
};

export const getStoreByUserId = async (id: number | string): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )').eq('o_id', id);
  error && console.log('getStoreByUserId Error', error);
  return data || [];
};

export const getCategories = async (): Promise<ICategory[]> => {
  const { data, error } = await supabase.from('category').select('*');
  error && console.log('getCategories Error', error);
  return data || [];
};
