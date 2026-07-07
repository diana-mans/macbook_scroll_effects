import {navLinks} from '../constants'
const baseUrl = import.meta.env.VITE_BASE_URL || '';

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src={`${baseUrl}/logo.svg`} alt="Apple logo" />
                <ul>
                    {navLinks.map(({label}) => <li key={label}>
                        <a href={label}>{label}</a>
                    </li>)}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src={`${baseUrl}/search.svg`} alt="Search" />
                    </button>
                    <button>
                        <img src={`${baseUrl}/cart.svg`} alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
