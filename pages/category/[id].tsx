import Body from 'layout/Body';
import { getStoreByCategoryId } from 'libs/providers/supabase-client';
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

export const getServerSideProps: GetServerSideProps = async (req) => {
  const categoryId = req.query.id;
  const data = await getStoreByCategoryId(categoryId);
  return {
    props: {
      data,
    },
  };
};
