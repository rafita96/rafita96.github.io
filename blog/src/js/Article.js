class Article extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return e('section', {'className': 'article'}, [
				e('h1', {'key': 'title'}, "Titulo"),
				e(Content, {'key': 'contenido'}, null)
			]);
	}
}