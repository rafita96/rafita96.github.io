class NavbarButton extends React.Component{
	render(){
		return e('li', {'className': this.props.className}, 
			e('a', {'className': 'nav-link','href': this.props.link}, 
				e('span', {'className': 'link-text'}, this.props.text)
				)
			);
	}
}