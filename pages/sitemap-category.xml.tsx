import { GetServerSideProps } from 'next';
import { getAllCategoryId } from 'libs/providers/supabase-client';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { DOMAIN_URL } from 'constants/index';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCategories = await getAllCategoryId();

  const fields = allCategories.map((category) => ({
    loc: `${DOMAIN_URL}/category/${category.id}`,
    lastmod: new Date().toISOString(),
    priority: 1.0,
    changefreq: 'weekly',
  })) as ISitemapField[];

  return getServerSideSitemap(ctx, fields);
};
export default Sitemap;
