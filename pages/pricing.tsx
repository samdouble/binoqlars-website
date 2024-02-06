import { useEffect } from 'react';
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGA from "react-ga4";
import Footer from '../components/Footer';
import Head from '../components/Head';
import TopMenu from '../components/TopMenu';
import styles from '../styles/Home.module.css';

const Pricing: NextPage = () => {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <div>
      <Head>
        <title>{`binoqlars.com - Pricing`}</title>
      </Head>
      <main>
        <TopMenu />
        <Container>
          <Row>
            <Col lg={4}>
              <div className={styles.container}>
                <h3>Free</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.container}>
                <h3>Pro</h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.container}>
                <h3>Enterprise</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
