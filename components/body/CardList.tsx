import { Grid, Text } from '@nextui-org/react';
import { IStore } from 'interfaces';
import { StoreCard } from '..';
import { configResponsive, useResponsive } from 'ahooks';
import { useEffect } from 'react';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

const CardList = ({ stores }: { stores: IStore[] }) => {
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
      {/* {[...Array(13)].map((_, i) => (
           <Grid key={i} xs={6} sm={4} md={3} lg={3} xl={2}>
             <StoreCard store />
           </Grid>
         ))} */}
    </Grid.Container>
  );
};

export default CardList;
