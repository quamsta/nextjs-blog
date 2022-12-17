import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import boxStyles from '../components/Box.module.css';
import { getSortedPostsData } from '../lib/posts';
import { loadFoldingStatsData } from '../lib/foldingstats';
import Link from 'next/link';
import Box from '../components/Box';
import ParsedDate from '../components/ParsedDate';

import FoldingStatsBox from '../components/FoldingStatsBox';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const foldingStats = await loadFoldingStatsData();



  return {
    props: {
      allPostsData,
      foldingStats
    },
  };
}

export default function Home({ allPostsData, foldingStats }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <FoldingStatsBox foldingStats={foldingStats} />
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Dustin and I'm learning the 10<sup>1000<sup>th</sup></sup> web framework I've ever learned: React. I'm combining my learning of React with Next.js because I don't want to toil away in early React tutorials. Let's see how it goes.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.secondaryText}>
                <ParsedDate dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  );
}
