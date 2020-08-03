const e = React.createElement;

class Main extends React.Component{

	constructor(props){
		super(props);
		var urlParams = new URLSearchParams(window.location.search);
		
		var blog = -1;
		if(urlParams.get("blog")){
			blog = urlParams.get("blog");
		}

		this.state = {
			blog: blog
		}
	}


	render(){

		var content;
		if(this.state.blog != -1){
			content = e(Article, {'key': 'content', 'blogID': this.state.blog}, null);
		}else{
			content = e(Articles, {'key': 'content'}, null);
		}

		return e('div', null, 
			[
				e(Header, {'key': 'navbar'}, null),
				e('main', {'className': 'content', 'key':'content'}, content),
				e(Footer, {'className': 'footer', 'key': 'footer'}, null)
			]);
	}
}

ReactDOM.render(
  e(Main, null, null),
  document.getElementById('root')
);