import Box from './Box'
import boxStyles from './Box.module.css'
import FoldingDate from './FoldingDate';
import Link from 'next/link';

export default function FoldingStatsBox({ foldingStats }) {
    return (
        <Box>
            <h2 className={`${boxStyles.boxHeading}`}>My <a href="https://foldingathome.org">Folding@Home</a> Stats</h2>
            <div className={boxStyles.boxContent}>
                <p className="mt-0">
                    <strong>Username:</strong> <a href={"https://stats.foldingathome.org/donor/" + foldingStats.name}>{foldingStats.name}</a> <br />
                    <strong>Score:</strong> {foldingStats.score} <br />
                    <strong>Rank:</strong> {foldingStats.rank} <br />
                    <strong>Last Unit Uploaded:</strong> <FoldingDate dateString={foldingStats.last} /><br />
                    <strong>Number of active clients:</strong> {foldingStats.active_7}
                </p>
                <p className="my-0">
                    <Link href="/stats">Full statistics &rarr;</Link>
                </p>
            </div>

        </Box>
    )
}




