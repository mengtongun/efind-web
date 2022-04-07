import ProCard from '@ant-design/pro-card';

const CardList = () => {
  return (
    <>
      <ProCard style={{ marginTop: 8 }} gutter={[16, 16]} wrap title=" Wrap ">
        {[...Array(10)].map((_, index) => (
          <ProCard key={index} colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
            Col
          </ProCard>
        ))}
      </ProCard>
    </>
  );
};

export default CardList;
