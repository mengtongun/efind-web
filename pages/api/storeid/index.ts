import { getAllStoreId } from 'libs/providers/supabase-client';

export default async function handler(req, res) {
  const storeId = await getAllStoreId();
  res.status(200).json(storeId);
}
