import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import About from '../components/About';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Founders from '../components/Founders';
import { Fade, Zoom } from 'react-awesome-reveal';
import Gallery from '../components/Gallery';

export default function Home(props) {
  // console.log(props);
  const data = Object.values(props);

  console.log(data);
  const fun = (e) => {
    console.log(e.target.textContent);
  }
  return (
    <div className='min-h-screen'>
      <Head>
        <title>MILAAN</title>
        <meta name="Community Website" content="Managed and Developed By Inderjit Shahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/node_modules/tw-elements/dist/js/index.min.js"></Script>
      <Zoom>
        <Header />
      </Zoom>
      <Zoom>
        <Banner />
      </Zoom>
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <Gallery/>
      </Zoom>
      <Zoom>
        <Founders />
      </Zoom>
      <Zoom>
        <Footer />
      </Zoom>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://test.turbocare.app/turbo/care/v1/makes?class=2w');
//   const users = await res.json();
//   // console.log(users);
//   return {
//     props: { ...users }
//   }
// }