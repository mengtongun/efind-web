import { CustomNextSeo } from '@/components';
import { IStore } from 'interfaces';
import Body from 'layout/Body';
import { getLatestStore } from 'libs/providers/supabase-client';
import { GetServerSideProps } from 'next';

declare type LatestPagePropsType = {
  data: IStore[];
};

const IndexPage = (props: LatestPagePropsType) => {
  const { data } = props;
  return (
    <div className="w-full">
      <CustomNextSeo
        title="Newest Store"
        description="Find the latest store which just onboard in eFind. The verified store for purchasing online product."
      />
      <Body stores={data} />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getLatestStore();
  return {
    props: {
      data,
    },
  };
};
