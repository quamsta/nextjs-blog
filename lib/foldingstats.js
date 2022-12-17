// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadFoldingStatsData() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.foldingathome.org/user/quamsta')
    const data = await res.json()
    return data
}