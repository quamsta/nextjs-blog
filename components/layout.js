import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from './nav';
const name = 'Dustin';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <Container>

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
                <Row>
                    <Col lg={8} className="m-auto">

                        <main>{children}</main>
                        {!home && (
                            <div>
                                <Link href="/">← Back to home</Link>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
