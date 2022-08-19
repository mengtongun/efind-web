import Body from 'layout/Body';
import { getPopularStore } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

const IndexPage = (props) => {
  const { data } = props;
  return (
    <div className="w-full">
      <Body stores={data} />
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
