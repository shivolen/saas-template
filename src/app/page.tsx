import Link from "next/link"

const page = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6'>
      <section className='text-center max-w-xl'>
        <h1 className='text-4xl font-bold mb-4'>
          Change Your Life in 21 Days!
        </h1>
        <p className='text-lg text-grey-500 mb-6'>
          Start Today , See The Change Tomorrow
        </p>

        
      </section>
      <section className='mt-16 grid gap-6 max-w-xl w-full'>
        <div className='p-4 border rounded-lg'>Accountability </div>
        <div className='p-4 border rounded-lg'>Discipline </div>
        <div className='p-4 border rounded-lg'>Dedication </div>
      </section>
      <section className='mt-16'>
      <Link href='/dashboard'>
      <button className='bg-blue-600 text-white px-6 py-3 rounded-lg'>Start Now
      </button>
      </Link>
      
      </section>
    </div>
  )
}

export default page