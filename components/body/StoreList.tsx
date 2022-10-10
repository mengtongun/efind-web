import { Grid } from '@nextui-org/react';
import { IStore } from 'interfaces';
import { StoreCard } from '..';
import { configResponsive, useResponsive } from 'ahooks';
import { Button, Result } from 'antd';
import { MehOutlined } from '@ant-design/icons';
import Link from 'next/link';

configResponsive({
  small: 400,
  middle: 800,
  large: 1200,
});

const StoreList = ({ stores }: { stores: IStore[] }) => {
  const responsive = useResponsive();

  return stores.length === 0 ? (
    <div className="overflow-hidden py-32">
      <Result
        icon={<MehOutlined />}
        title="No stores found"
        extra={
          <Link href="/">
            <Button type="primary" ghost>
              Go back
            </Button>
          </Link>
        }
      />
    </div>
  ) : (
    <Grid.Container gap={1} justify="flex-start">
      {stores.map((store, idx) => (
        <Grid key={idx} xs={6} sm={4} md={3} lg={3} xl={2}>
          <StoreCard store={store} responsive={responsive} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default StoreList;
