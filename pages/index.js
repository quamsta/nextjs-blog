import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import ParsedDate from '../components/date';
import FoldingDate from '../components/folding-date';
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
        <h2 className={utilStyles.headingLg}>My <a href="https://foldingathome.org">Folding@Home Stats</a></h2>

        <p>
          <strong>Username:</strong> <a href={"https://stats.foldingathome.org/donor/" + foldingStats.name}>{foldingStats.name}</a> <br />
          <strong>Score:</strong> {foldingStats.score} <br />
          <strong>Rank:</strong> {foldingStats.rank} <br />
          <strong>Last Unit Uploaded:</strong> <FoldingDate dateString={foldingStats.last} /><br />
          <strong>Number of active clients:</strong> {foldingStats.active_7}
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
                <ParsedDate dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  );
}
