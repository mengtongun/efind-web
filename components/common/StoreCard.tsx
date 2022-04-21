import { Button, Card, Col, Row, Text } from '@nextui-org/react';

const StoreCard = () => (
  <Card cover css={{ w: '100%' }} clickable draggable hoverable animated>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h1 size={24} color="black">
          Store Name
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        height={400}
        width="100%"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      blur
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
            Location
          </Text>
          <Text color="#000" size={16}>
            Category
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                Facebook
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
export default StoreCard;
