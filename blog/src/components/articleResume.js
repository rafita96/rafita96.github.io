import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const ArticleResume = ({ node}) => {
	const title = node.frontmatter.title || node.fields.slug;
	return(
		<article className="article-resume" key={node.fields.slug}>
            <header className="article-resume-header">
               <Link className="article-resume-title" to={node.fields.slug}>
                  {title}
               </Link>
            </header>
            <section className="article-resume-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
         </article>
	);
}

export default ArticleResume