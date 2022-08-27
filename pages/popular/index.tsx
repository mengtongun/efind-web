import { CustomNextSeo } from '@/components';
import { IStore } from 'interfaces';
import Body from 'layout/Body';
import { getPopularStore } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

declare type PopularPagePropsType = {
  data: IStore[];
};

const IndexPage = (props: PopularPagePropsType) => {
  const { data } = props;
  return (
    <div className="w-full">
      <Body stores={data} />
      <CustomNextSeo title="Popular" />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getPopularStore();
  return {
    props: {
      data,
    },
  };
};
