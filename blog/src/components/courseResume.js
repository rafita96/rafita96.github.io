import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const CourseResume = ({ node}) => {
	const title = node.frontmatter.title || node.fields.slug;
	return(
		    <article className="course-resume" key={node.fields.slug}>
            <header className="course-resume-header">
               <Link className="course-resume-title" to={node.fields.slug}>
                  {title}
               </Link>
            </header>
            <section className="course-resume-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
         </article>
	);
}

export default CourseResume