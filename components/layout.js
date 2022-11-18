import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';

const name = 'Dustin';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div class="container pt-10 max-w-2xl mx-auto px-4">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                {home ? (
                    <>
                        {/* <Image
                            unoptimized
                            priority
                            src="/nextjs-blog/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt="me"
                        /> */}
                        <h1 className="text-3xl font-bold mb-3">
                            {name}
                        </h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            {/* <Image
                                unoptimized
                                priority
                                src="/nextjs-blog/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt="me"
                            /> */}
                        </Link>
                        <h2>
                            <Link href="/">
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
