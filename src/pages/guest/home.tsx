
import Carousel from '../../components/guest/Carousel'

const Home = () => {
  return (
    <>
      <Carousel />

      <section className='py-4 md:py-8 cursor-pointer text-center'>
        <div className="py-4 md:py-8">
          <h2 className="text-3xl text-center">
            Course Categories
          </h2>
          <p className='text-center py-2'>Chose your favorite course</p>
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {Array.from({ length: 5 }).map((item, index) => (
            <div className="border p-4 rounded bg-gray-50 hover:bg-gray-100 shadow-sm">
              <h1 className='text-md font-semibold text-gray-600'>Noun</h1>
              <p className='text-gray-600'>learn noun here</p>
            </div>
          ))}
        </div>
        {/* <button className='w-full py-2.5 px-4 bg-black text-white mt-4 md:mt-8'>Brouse all categories</button> */}
      </section>

      <section className='py-4 md:py-8 cursor-pointer text-center container'>
        <div className="py-4 md:py-8">
          <h2 className="text-3xl text-left">
            Our Speciality
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-2">
          {Array.from({ length: 5 }).map((item, index) => (
            <div className="border p-4 rounded">
              <img className='w-full overflow-hidden rounded' src="https://i.ytimg.com/vi/zySkNHRK8RA/maxresdefault.jpg" alt="bannar" />
              <h1 className='text-md font-semibold text-gray-600 pt-2'>Subject Verb Agreement</h1>
              <p className='text-gray-600'>By <span className='font-normal'>Md Mishrat Hossain</span></p>
            </div>
          ))}
        </div>
        <button className='py-2.5 px-4 bg-black text-white mt-4 md:mt-8'>Brouse all courses</button>
      </section>

      <section className='py-4 md:py-8 cursor-pointer text-center w-2/3'>
        <div className="py-4 md:py-8">
          <h2 className="text-3xl text-center">
            Our Speciality
          </h2>
          <p className='text-center py-2'>Why you should chose us</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          {Array.from({ length: 3 }).map((item, index) => (
            <div className="border p-4 rounded bg-gray-50 hover:bg-gray-100 shadow-sm">
              <h1 className='text-md font-semibold text-gray-600'>100+ Online course</h1>
              <p className='text-gray-600'>learn over 100+ course with experts</p>
            </div>
          ))}
        </div>
        {/* <button className='w-full py-2.5 px-4 bg-black text-white mt-4 md:mt-8'>Brouse all categories</button> */}
      </section>

      <section className='py-4 md:py-8 cursor-pointer text-center container'>
        <div className="py-4 md:py-8">
          <h2 className="text-3xl text-left">
            Best Teachers
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:justify-between gap-2">
          {Array.from({ length: 5 }).map((item, index) => (
            <div className="border p-4 rounded">
              <img className='w-full overflow-hidden rounded-full' src="https://t3.ftcdn.net/jpg/06/57/85/22/360_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg" alt="bannar" />
              <h1 className='text-md font-semibold text-gray-600 pt-2'>Md Mishrat Hossain</h1>
              <p className='text-gray-600'>BBA in Accounting</p>
            </div>
          ))}
        </div>
        <button className='py-2.5 px-4 bg-black text-white mt-4 md:mt-8'>View all Teachers</button>
      </section>


      <section className='py-4 md:py-8 cursor-pointer text-center w-2/3'>
        <div className="py-4 md:py-8">
          <h2 className="text-3xl text-center">
            Student Feedback
          </h2>
          <p className='text-center py-2'>Why you should chose us</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          {Array.from({ length: 3 }).map((item, index) => (
            <div className="border p-4 rounded bg-gray-50 hover:bg-gray-100 shadow-sm">
              <h1 className='text-md font-semibold text-gray-600'>100+ Online course</h1>
              <p className='text-gray-600'>learn over 100+ course with experts</p>
            </div>
          ))}
        </div>
        {/* <button className='w-full py-2.5 px-4 bg-black text-white mt-4 md:mt-8'>Brouse all categories</button> */}
      </section>
    </>
  )
}

export default Home