import Head from 'next/head'
import ClientOnly from '@/components/ClientOnly'
import Header from '@/components/header'
import Hero from '@/components/hero'
import RecentPosts from '@/components/RecentPosts'
import FeaturedWorks from '@/components/FeaturedWorks'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </div>
  )
}
