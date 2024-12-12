'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/footer'

const BlogPage = () => {
  const posts = [
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      categories: 'Express, Handlebars',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      categories: 'Express, Handlebars',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      categories: 'Express, Handlebars',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      categories: 'Express, Handlebars',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-3xl w-full px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-start text-[#21243D]">
            Blog
          </h1>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="border-b pb-6">
                <h2 className="text-xl font-semibold text-[#21243D]">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-500 mt-2">
                  {post.date} <span className="mx-2">|</span> {post.categories}
                </div>
                <p className="text-gray-600 mt-4">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage
