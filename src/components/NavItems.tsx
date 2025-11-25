import Link from "next/link"
const navItems=[
    {label:'Home', href:'/'},
    {label:'Dashboard', href:'/dashboard'},
    {label:'Habit Tracker', href:'/habit_tracker'},
    {label:'Subscription', href:'/subscription'}
]
const NavItems = () => {
  return (
    <nav className='flex items-center gap-4 '>
        {navItems.map(({label,href}) => (
            <Link href={href} key={label}>
                {label}
            </Link>

        ))}
    </nav>
  )
}

export default NavItems