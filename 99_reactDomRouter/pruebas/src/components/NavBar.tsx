

const NavBar = () => {
    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        },

    ]
    return (
        <nav className="border-b border-gray-300">
            <div className="py-4 px-10 flex justify-between items-center">
                <a className="font-bold text-2xl tracking-widest text-green-700" href="/">PRM</a>
                <ul className="flex space-x-8 ">
                    {
                        routes.map((route,index)=>(
                            <li key={index}>
                                <a className="hover:text-green-800" href={route.path}>{route.name}</a>
                                </li>
                        ))
                    }
                   
                </ul>
            </div>
        </nav>
    )
}

export default NavBar