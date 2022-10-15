import { CustomNextSeo } from '@/components';
import { IStore } from 'interfaces';
import StoreBody from 'layout/StoreBody';
import { getStoreByCategoryId, getStoreById } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

declare type StorePagePropsType = {
  data: IStore;
  stores: IStore[];
};

const IndexPage: React.FC<StorePagePropsType> = (props) => {
  const { data, stores } = props;
  return (
    <div className="w-full">
      <CustomNextSeo title={data.name} description={data.description} image={data.logo} />
      <StoreBody data={data} stores={stores} />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (req) => {
  const storeId = req.query.id;
  const data = await getStoreById(storeId);
  const stores = await getStoreByCategoryId(data.c_id);
  return {
    props: {
      data,
      stores,
    },
  };
};
