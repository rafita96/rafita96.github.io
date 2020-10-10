import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

	const data = useStaticQuery(graphql`
    query {
      icon: file(absolutePath: { regex: "/icon.png/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
            mail
          }
        }
      }
    }
  `)

	return(
		<footer className="footer-distributed">
			<Left data={data} />
			<Center data={data} />
			<Right data={data} />
		</footer>
	);
}

const Left = ({data}) => {
	return(
		<div className="footer-left">
			<Image
		        fixed={data.icon.childImageSharp.fixed}
		        alt="icon"
		      />
		    <p className="footer-company-name">
		    	2020 Rafita kun
		    </p>
		</div>
	);
}

const Center = ({data}) => {
	const correo = "mailto:"+data.site.siteMetadata.social.mail;
	return(
		<div className="footer-center">
			<h3>Comentarios o preguntas</h3>
			<div>
				<FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
				<p>
					<a className="footer-email" href={correo+"?subject=Mail from BLOG"}>{data.site.siteMetadata.social.mail}</a>
				</p>
			</div>
		</div>
	);
}

const Right = () => {
	return(
		<div className="footer-right">
			<p className="footer-company-about">
				<span>Redes sociales</span>
				Te ofrezco un curso básico para programar automóviles autónomos.
			</p>
			<div className="footer-icons">
				<Link to={`/`}><FontAwesomeIcon icon={faFacebook} /></Link>
				<Link to={`/`}><FontAwesomeIcon icon={faInstagram} /></Link>
				<Link to={`/`}><FontAwesomeIcon icon={faYoutube} /></Link>
			</div>
		</div>
	);
}

export default Footer