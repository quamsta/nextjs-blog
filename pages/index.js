import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const foldingStatsRes = await fetch('https://api.foldingathome.org/user/quamsta')
  const foldingStats = await foldingStatsRes.json()

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
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Dustin and I'm learning the 10<sup>1000<sup>th</sup></sup> web framework I've ever learned: React. I'm combining my learning of React with Next.js because I don't want to toil away in early React tutorials. Let's see how it goes.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Folding@Home Stats</h2>

        <p>
          Username: {foldingStats.name} <br />
          Score: {foldingStats.score} <br />
          Rank: {foldingStats.rank} <br />
          Last Unit Uploaded: <Date dateString={foldingStats.last} /><br />
          Number of active clients: {foldingStats.active_7}
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  );
}
