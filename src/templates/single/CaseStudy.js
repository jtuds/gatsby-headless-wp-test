import React from "react"
import { graphql } from "gatsby"
import CaseStudyPost from "../../components/template-parts/case-study-post"

export default ({ data }) => <CaseStudyPost data={data} />

export const query = graphql`
  query case_study($id: String!) {
    page: wpCaseStudy(id: { eq: $id }) {
      title
      content
    }
  }
`
