export default function RecentPosts() {
  return (
    <section className="w-full bg-[#EDF7FA] h-[700px] md:h-[396px] flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-gray-900">
            Recent posts (coming soon...)
          </h2>
          {/* <a href="/blog" className="text-blue-500 text-base">
            View all
          </a> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 filter blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-md h-[295px] flex flex-col justify-center">
            <h3 className="text-[1.625rem] font-semibold text-gray-900">
              Making a design system from scratch
            </h3>
            <p className="text-lg text-gray-600 mt-[11px]">
              12 Feb 2020 | Design, Pattern
            </p>
            <p className="text-base text-gray-600 mt-[11px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-[295px] flex flex-col justify-center">
            <h3 className="text-[1.625rem] font-semibold text-gray-900">
              Creating pixel perfect icons in Figma
            </h3>
            <p className="text-lg text-gray-600 mt-[11px]">
              12 Feb 2020 | Figma, Icon Design
            </p>
            <p className="text-base text-gray-600 mt-[11px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
