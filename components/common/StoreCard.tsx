import { Button, Card, Col, Row, Text } from '@nextui-org/react';
import { IStore } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';

const StoreCard = ({ store }: { store: IStore }) => (
  <Card css={{ w: '100%' }} draggable isHoverable isPressable disableAnimation={false}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text
          h1
          size={24}
          color="black"
          style={{
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '0.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
          }}
        >
          {store.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Image
        src={store.logo || '/images/efind.png'}
        height={400}
        width="100%"
        alt="Store Background"
        loading="lazy"
        onLoad={() => {
          <Image layout="fill" src="/images/efind.png" alt="efind-shop-loader" />;
        }}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: 'absolute',
        bgBlur: '#ffffff',
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={16}>
            {store.location}
          </Text>
          <Text color="#000" size={16}>
            {store.category.name}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href={store.fb || '#'} passHref>
              <Button flat auto rounded color="secondary">
                <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                  Facebook
                </Text>
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
export default StoreCard;
