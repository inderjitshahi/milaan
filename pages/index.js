import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>MILAAN</title>
        <meta name="Community Website" content="Managed and Developed By Inderjit Shahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen flex items-center justify-center text-5xl text-purple-600 font-bold'>
        <h1>Milaan</h1>
      </div>
    </>
  )
}
