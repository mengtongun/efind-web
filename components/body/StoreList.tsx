import { Grid, Text } from '@nextui-org/react';
import { IStore } from 'interfaces';
import { StoreCard } from '..';
import { configResponsive, useResponsive } from 'ahooks';
import { useEffect } from 'react';

configResponsive({
  small: 400,
  middle: 800,
  large: 1200,
});

const StoreList = ({ stores }: { stores: IStore[] }) => {
  const responsive = useResponsive();
  useEffect(() => {
    return () => {};
  }, []);

  return stores.length === 0 ? (
    <Text className="text-center text-gray-500 text-2xl py-12">No stores found</Text>
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
