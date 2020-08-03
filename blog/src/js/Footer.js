class Footer extends React.Component{
	
	render(){

		let left = e('div', {'className': 'footer-left', 'key': 'left'}, [
				e('img', {'src': "./public/img/logo.png", "key": 'logo'}, null),
				e('p', {'className': 'footer-company-name', 'key': "company"}, "2020 Rafita kun")
			]);

		let center = e('div', {'className': 'footer-center', 'key': 'center'}, [

				e('h3', {'key': 'about'}, "Sobre el blog"),
				e('p', {'className': 'footer-links', 'key': 'links'}, 
					[
						e('a',{'href': "#", 'key':'home'},"Home"),
						e('a',{'href': "#", 'key':'blog'},"Blog"),
						e('a',{'href': "#", 'key':'about'},"About"),
						e('a',{'href': "#", 'key':'contact'},"Contact")
					]),
				e('div', {'key':'mail'},[
					e('i', {'className': 'fa fa-envelope', 'key': 'icon'}, null),
					e('p', {'key':'mail'}, 
						e('a',{'href': 'mailto:rafael.peralta.blanco@gmail.com'},"rafael.peralta.blanco@gmail.com"))
					])

			]);


		let right = e('div', {'className': 'footer-right', 'key':'right'},[
				e('p', {'className': 'footer-company-about', 'key':'mision'}, [
					e('span', {'key': 'titulo'}, "About the company"),
					"Te ofrecemos un curso completo amiguito"
					]),
				e('div', {'className': 'footer-icons', 'key': 'icons'},[
					e('a', {'key': 'facebook'}, e('i', {'className': "fa fa-facebook"}, null)),
					e('a', {'key': 'instagram'}, e('i', {'className': "fa fa-instagram"}, null)),
					e('a', {'key': 'linkedin'}, e('i', {'className': "fa fa-linkedin"}, null)),
					e('a', {'key': 'youtube'}, e('i', {'className': "fa fa-youtube"}, null)),
					])
			]);

		return e('footer', {'className': 'footer-distributed'}, [
				left, center, right
			]);
	}
}