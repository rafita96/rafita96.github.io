const e = React.createElement;

class Main extends React.Component{
	render(){
		return e('div', null, 
			[
				e(Header, {'key': 'navbar'}, null),
				e('div', {'className': 'content'}, e(Articles, {'key': 'content'}, null)),
				e(Footer, {'className': 'footer'}, null)
			]);
	}
}

ReactDOM.render(
  e(Main, null, null),
  document.getElementById('root')
);