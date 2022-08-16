import { Button, Grid } from '@nextui-org/react';
import { Skeleton } from 'antd';
import { ICategory } from 'interfaces';
import { shuffle } from 'libs/functions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CategoriesContext } from 'pages/_app';
import React, { useContext, useEffect, useState } from 'react';

const SuggestList = () => {
  const categories = useContext(CategoriesContext);
  const router = useRouter();
  const [suggests, setSuggests] = useState<ICategory[]>([]);
  useEffect(() => {
    const randomCategories = (shuffle(categories || []) as ICategory[]) || [];
    const spliced = randomCategories.slice(0, 5);
    setSuggests(spliced);
  }, [categories]);

  const onRouteToCategory = (id) => {
    router.push(`/category/${id}`);
  };

  const getColor = (index) => {
    switch (index) {
      case 0:
        return '#f5222d';
      case 1:
        return '#faad14';
      case 2:
        return '#52c41a';
      case 3:
        return '#1890ff';
      case 4:
        return '#13c2c2';
      case 5:
        return '#2f54eb';
      case 6:
        return '#722ed1';
      case 7:
        return '#eb2f96';
      case 8:
        return '#f5222d';
      case 9:
        return '#faad14';
      default:
        return '#1890ff';
    }
  };
  return categories ? (
    <Grid.Container gap={1} className="flex justify-center items-center">
      {suggests.map((category, index) => (
        <Grid key={category.id}>
          <Button
            onClick={() => onRouteToCategory(category.id)}
            style={{ backgroundColor: getColor(index) }}
            className="flex"
          >
            <Image src={category.icon} objectFit="contain" width={50} height={25} />
            <p>{category.name}</p>
          </Button>
        </Grid>
      ))}
    </Grid.Container>
  ) : (
    <Skeleton active />
  );
};

export default SuggestList;
