import { Grid } from '@nextui-org/react';
import { StoreCard } from '..';

const CardList = () => (
  <Grid.Container gap={2} justify="flex-start">
    {[...Array(12)].map((_, i) => (
      <Grid key={i} xs={6} sm={4} md={3} lg={3} xl={2}>
        <StoreCard />
      </Grid>
    ))}
    <Grid xs={2}>
      <StoreCard />
    </Grid>
  </Grid.Container>
);
export default CardList;
