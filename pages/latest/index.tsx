import Body from 'layout/Body';
import { supabase } from 'libs/supabase';
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
  const { data } = await supabase
    .from('store')
    .select('* ,category:c_id ( name )')
    .order('id', { ascending: false })
    .limit(30);

  return {
    props: {
      data,
    },
  };
};
