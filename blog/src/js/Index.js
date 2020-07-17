class Index extends React.Component{
	render(){
		return e('ul', {'className': 'index'}, [

			e('li', {'key': 1}, "Seccion 1"),
			e('li', {'key': 2}, "Seccion 2"),
			e('li', {'key': 3}, "Seccion 3"),
			e('li', {'key': 4}, "Seccion 4")

			]);
	}
}