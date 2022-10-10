import { CustomNextSeo } from '@/components';
import { IStore } from 'interfaces';
import Body from 'layout/Body';
import { getStoreByCategoryId } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

declare type CategoryPagePropsType = {
  data: IStore[];
};

const IndexPage = (props: CategoryPagePropsType) => {
  const { data } = props;
  const categoryName = data[0]?.category.name || '';

  return (
    <div className="w-full">
      <CustomNextSeo title={categoryName} />
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
