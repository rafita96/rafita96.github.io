class Article extends React.Component{
	render(){
		return e('main', {'className': 'article'}, [
				e(Img, {'key': 'img'}, null),
				e('h1', {'key': 'title'}, Titulo),
				e(Index, {'key': 'index'}, null),
				e(Content, {'key': 'contenido'}, null),
				e(Sidebar, {'key': 'sidebar'}, null),
				e(Footer, {'key': 'footer'}, null)
			]);
	}
}