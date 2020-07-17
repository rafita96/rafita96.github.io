class Sidebar extends React.Component{
	render(){
		return e('ul', {'className': 'sidebar'}, [

				e('li', {'key': 1}, "Julio 2020"),
				e('li', {'key': 2}, "Julio 2019"),
				e('li', {'key': 3}, "Julio 2018")

			]);
	}
}