import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Works = () => {
  return (
    <>
      <Header />
      <section className="bg-white w-full px-4 md:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            Works
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-[2.5rem] font-semibold text-gray-900">
                Designing Dashboards with usability in mind
              </h2>
              <div className="flex items-center space-x-2 mt-4">
                <span className="bg-red-200 text-red-500 rounded-full px-2 py-1 text-xs md:text-sm">
                  2020
                </span>
                <span className="text-gray-500 text-xs md:text-base">
                  Dashboard, User Experience Design
                </span>
              </div>
              <p className="text-gray-600 mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <img
                src="/images/dashboard-sample.jpg"
                alt="Dashboard"
                className="w-full mt-4 object-cover"
              />
            </div>

            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Heading 1
                </h3>
                <h4 className="text-lg font-medium text-gray-700 mt-2">
                  Heading 2
                </h4>
                <p className="text-gray-600 mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <img
                  src="/images/car-sample.jpg"
                  alt="Car"
                  className="w-full mt-4 object-cover"
                />
              </div>

              <div>
                <img
                  src="/images/order-sample.jpg"
                  alt="Order"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Works
