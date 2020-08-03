class Article extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			texto: "Sabritas"
		};
	}

	componentDidMount(){
		let that = this;
		fetch(fullpath+"/src/articles/template.md")
							.then(function(response) {
								// console.log(response);
							    return response.text();
							  })
							.then(function(md){
								that.setState({texto: md});
							});
	}

	render(){
		return e('section', {'className': 'article'}, [
				e('h1', {'key': 'title'}, "Titulo"),
				this.state.texto
			]);
	}
}