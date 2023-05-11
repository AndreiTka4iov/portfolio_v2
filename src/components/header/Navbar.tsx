const Navbar = () => {
    const btn = [
        { id: 1, href: '#home', title: 'Home' },
        { id: 2, href: '#about', title: 'About' },
        { id: 3, href: '#projects', title: 'Projects' },
        { id: 4, href: '#contacts', title: 'Contacts' },
    ]

    return ( 
        <nav className="
            h-16
            flex
            gap-4 
        ">
            {btn.map( (btn: any)  => 
                <a 
                href={btn.href} 
                key={btn.id}
                className="
                    flex
                    items-center
                    h-16
                    text-lg
                    text-gray-300
                    transition
                    hover:text-red-500
                ">
                    {btn.title}
                </a>
            )}
            
            
        </nav>
     );
}
 
export default Navbar;