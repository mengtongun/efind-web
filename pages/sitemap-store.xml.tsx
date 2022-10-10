import { GetServerSideProps } from 'next';
import { getAllStoreId } from 'libs/providers/supabase-client';
import { DOMAIN_URL } from 'constants/index';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allStores = await getAllStoreId();
  const fields = allStores.map((category) => ({
    loc: `${DOMAIN_URL}/category/${category.id}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'weekly',
  })) as ISitemapField[];

  return getServerSideSitemap(ctx, fields);
};
export default Sitemap;
