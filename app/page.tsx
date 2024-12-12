'use client'

import Head from 'next/head'
import ClientOnly from '@/components/ClientOnly'
import Header from '@/components/header'
import Hero from '@/components/hero'
import RecentPosts from '@/components/RecentPosts'
import FeaturedWorks from '@/components/FeaturedWorks'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeIn } from '@/utils/animationVariants'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Felipe Reducino - Front-End Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <ClientOnly>
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <Header />
        </motion.header>
      </ClientOnly>

      {/* Main Content */}
      <main>
        {' '}
        {/* Add top margin to account for fixed header */}
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.section>
        {/* Recent Posts */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <RecentPosts />
        </motion.section>
        {/* Featured Works */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <FeaturedWorks />
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Footer />
      </motion.footer>
    </>
  )
}
