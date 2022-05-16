import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/Banner';
import BigCarousel from '../components/BigCarousel';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CK</title>
        <meta name="CK" content="Çorabı ayağına göre uzat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Navbar />
      <BigCarousel />
    </div>
  );
};

export default Home;
