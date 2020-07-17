class Navbar extends React.Component{
	render(){
		return e('nav', {'className': 'navbar'}, 
				e('ul', {'className': 'navbar-nav'},  
					[
						e(NavbarButton,{'key': 1, 'link': '#hola', 'className': 'logo', 'text': e('h1', null, "Logo")}, null),
						e(NavbarButton,{'key': 2, 'link': '#hola', 'className': 'nav-item', 'text': 'Inicio'}, null), 
						e(NavbarButton,{'key': 3, 'link': '#hola', 'className': 'nav-item', 'text': 'Introducción'}, null), 
						e(NavbarButton,{'key': 4, 'link': '#perro', 'className': 'nav-item', 'text': 'Tutoriales'}, null),
						e(NavbarButton,{'key': 5, 'link': '#hola', 'className': 'nav-item', 'text': "Contacto"}, null)
					]
				)
		);
	}
}