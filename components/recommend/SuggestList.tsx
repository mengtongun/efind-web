import { Button, Grid } from '@nextui-org/react';
import { Skeleton } from 'antd';
import { ICategory } from 'interfaces';
import { shuffle } from 'libs/functions';
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
    <Grid.Container className="justify-center items-center hidden lg:flex" gap={1}>
      {suggests.map((category, index) => (
        <Grid key={category.id}>
          <Button onPress={() => onRouteToCategory(category.id)} style={{ backgroundColor: getColor(index) }}>
            {/* <Image src={category.icon} objectFit="contain" width={20} height={25} /> */}
            <img alt={'category icon' + category.name} src={category.icon} className="w-4 h-4 mr-2" />
            {category.name}
          </Button>
        </Grid>
      ))}
    </Grid.Container>
  ) : (
    <Skeleton paragraph={false} active className="hidden lg:flex" />
  );
};

export default SuggestList;
