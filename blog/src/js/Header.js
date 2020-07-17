class Header extends React.Component{
	render(){
		return e('header', null,
				e(Navbar, {'key': "navbar"}, null)
			);
	}
}