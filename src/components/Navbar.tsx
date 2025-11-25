import NavItems from './NavItems'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between px-5 py-1 bg-white shadow'>
        <Link href='/'>
          <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image 
            src='/test.jpg' 
            alt='logo' 
            width={46} 
            height={44} />
          </div>
        </Link>
          
        <div className='flex items-center gap-8 '>
          <NavItems />
          <p>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar