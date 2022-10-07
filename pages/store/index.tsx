import { CustomNextSeo } from '@/components';
import { IStore } from 'interfaces';
import Body from 'layout/Body';
import StoreBody from 'layout/StoreBody';
import { getStoreById } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

declare type StorePagePropsType = {
  data: IStore;
};

const IndexPage: React.FC<StorePagePropsType> = (props) => null;

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (req) => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
