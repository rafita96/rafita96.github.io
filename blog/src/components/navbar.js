import React from "react"
import { Link } from "gatsby"

const Navbar = ({ location}) => {
	return(
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="logo">Logo</li>
				<NavbarButton link={`/`}>Inicio</NavbarButton>
				<NavbarButton link={`/`}>Introducción</NavbarButton>
				<NavbarButton link={`/`}>Tutoriales</NavbarButton>
				<NavbarButton link={`/`}>Contacto</NavbarButton>
			</ul>
		</nav>
	);
}

const NavbarButton = ({link, text, children}) => {
	return(
		<li className="nav-item">
			<Link className="nav-link" to={link}>
				<span className="link-text">{children}</span>
			</Link>
		</li>
	);
}

export default Navbar