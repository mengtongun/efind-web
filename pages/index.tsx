import { CustomNextSeo } from '@/components';
import Body from 'layout/Body';
import { getStoreByPage } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

const IndexPage = (props) => {
  const { data } = props;
  return (
    <div className="w-full">
      <CustomNextSeo title="Welcome to the only trusted site" />
      <Body stores={data} />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const data = await getStoreByPage(+page);
  return {
    props: {
      data,
    },
  };
};
