import Link from 'next/link';

// THESE ARE THE ROUTS FOR THE SITE

export default props => (
    <div>
        <nav>
            <Link href="/">
                <a>home</a> 
            </Link>
            
            <Link href="/about">
                <a>about</a>
            </Link>
        </nav>
        {/* THIS KEEPS THE NAV BAR ON TOP OF ALL ROUTS */}
        {props.children}
    </div>
)