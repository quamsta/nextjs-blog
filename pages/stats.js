import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import boxStyles from '../components/Box.module.css';
import { loadFoldingStatsData } from '../lib/foldingstats';
import Link from 'next/link';
import Box from '../components/Box';
import ParsedDate from '../components/ParsedDate';
import FoldingDate from '../components/FoldingDate';
import FoldingStatsBox from '../components/FoldingStatsBox';
export async function getStaticProps() {

    const foldingStats = await loadFoldingStatsData();

    return {
        props: {

            foldingStats
        },
    };
}

export default function Stats({ foldingStats }) {
    return (
        <Layout stats>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h2>Folding@Home Full Statistics</h2>
                <p><strong>Username:</strong> <a href={"https://stats.foldingathome.org/donor/" + foldingStats.name}>{foldingStats.name}</a> <br />
                    <strong>Score:</strong> {foldingStats.score} <br />
                    <strong>Rank:</strong> {foldingStats.rank} <br />
                    <strong>Last Unit Uploaded:</strong> <FoldingDate dateString={foldingStats.last} /><br />
                    <strong>Number of active clients:</strong> {foldingStats.active_7}</p>
                <hr />
                <p><strong>Number of work units:</strong> {foldingStats.wus}<br />
                    <strong>Number of active clients in the last 50 days:</strong> {foldingStats.active_50}<br />
                    <strong>Teams:</strong>
                </p>
                {foldingStats.teams.length > 0 &&
                    <ul>
                        {foldingStats.teams.map((team) =>
                            <li key={team.team}> <a href={"https://stats.foldingathome.org/team/" + team.team}>{team.name}</a></li>
                        )}
                    </ul>
                }
            </section>
        </Layout >
    );
}
