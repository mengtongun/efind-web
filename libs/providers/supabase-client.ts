import { SUPABASE_URL, SUPABASE_ANON_KEY } from './../../constants/index';
import { createClient } from '@supabase/supabase-js';
import { IStore, IUser, ICategory } from 'interfaces';

const LIMIT_QUERY = 20;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
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

export const updateUserName = async (user: IUser, name: string) => {
  await supabase
    .from('user')
    .update({
      name: name,
    })
    .eq('id', user.id);
};

export const getStores = async (limit: number = LIMIT_QUERY): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )');
  // .limit(limit);
  error && console.log('getStores Error', error);
  return data || [];
};
export const getStoreByPage = async (page: number = 1): Promise<IStore[]> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name ) ');
  // .range(page, LIMIT_QUERY * page);
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
    .order('id', { ascending: false });
  // .limit(30);

  error && console.log('getLatestStore Error', error);
  return data || [];
};

export const getPopularStore = async (): Promise<IStore[]> => {
  const { data, error } = await supabase
    .from('store')
    .select('* ,category:c_id ( name )')
    .order('view_count', { ascending: false });
  // .limit(30);

  error && console.log('getPopularStore Error', error);

  return data || [];
};

export const getStoreById = async (id: number | string | string[]): Promise<IStore> => {
  const { data, error } = await supabase.from('store').select('* ,category:c_id ( name )').eq('id', id);
  error && console.log('getStoreById Error', error);
  return data[0] || {};
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

export const getAllStoreId = async (): Promise<Partial<IStore>[]> => {
  const { data, error } = await supabase.from('store').select('id');
  error && console.log('getAllStoreId Error', error);

  return data || [];
};

export const getAllCategoryId = async (): Promise<Partial<ICategory>[]> => {
  const { data, error } = await supabase.from('category').select('id');
  error && console.log('getAllCategoryId Error', error);

  return data || [];
};
