import StoreModal from '../popup/StoreModal';
import { Button, Card, Col, Row, Text, useModal } from '@nextui-org/react';
import { IStore } from 'interfaces';
import Link from 'next/link';
import Image from 'next/image';

declare type StoreCardPropsType = {
  store: IStore;
  responsive: Record<string, boolean>;
};
const StoreCard = (props: StoreCardPropsType) => {
  const { responsive, store } = props;
  const { bindings, setVisible } = useModal();
  return (
    <Card
      css={{ w: '100%' }}
      draggable
      isHoverable
      isPressable
      disableAnimation={false}
      onPress={() => setVisible(true)}
    >
      <StoreModal bindings={bindings} setVisible={setVisible} store={store} />
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            New
          </Text>
          <Text
            h1
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
          height={responsive ? (responsive.small ? 100 : 400) : 400}
          width="100%"
          alt="Store Background"
          loading="eager"
          objectFit="contain"
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
            {/* <Text color="#000" size={16}>
              {store.location}
            </Text> */}
            <Text color="#000" size={16}>
              {store.category.name}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link href={store.fb || '#'} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Button flat auto rounded color="secondary">
                    <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                      Facebook
                    </Text>
                  </Button>
                </a>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default StoreCard;
