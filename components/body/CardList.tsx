import { Grid, Text } from '@nextui-org/react';
import { IStore } from 'interfaces';
import { StoreCard } from '..';

const CardList = ({ stores }: { stores: IStore[] }) =>
  stores.length === 0 ? (
    <Text className="text-center text-gray-500 text-2xl py-12">No stores found</Text>
  ) : (
    <Grid.Container gap={2} justify="flex-start">
      {stores.map((store, idx) => (
        <Grid key={idx} xs={6} sm={4} md={3} lg={3} xl={2}>
          <StoreCard store={store} />
        </Grid>
      ))}
      {/* {[...Array(13)].map((_, i) => (
           <Grid key={i} xs={6} sm={4} md={3} lg={3} xl={2}>
             <StoreCard store />
           </Grid>
         ))} */}
    </Grid.Container>
  );

export default CardList;
