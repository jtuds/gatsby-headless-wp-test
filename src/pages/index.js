import React from "react"
import { graphql, Link } from 'gatsby'

import { normalizePath } from "../utils/get-url-path"

import HeaderAndNav from '../components/header-and-nav';

/** See todo file for next steps */

const HomePageLayout = ({data}) => (
  <div>
    <HeaderAndNav />

    <div>
      Read our blogs
      {data.allWpPost.nodes.map((post, key) => (
        <Link key={key} to={normalizePath(post.uri)}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div> 

    <div>
      Read our case studies
      {data.allWpCaseStudy.nodes.map((post, key) => (
        <Link key={key} to={normalizePath(post.uri)}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
    
    
  </div>
);

export default HomePageLayout

export const query = graphql`
  query DbSHomePage {
    allWpPost {
      nodes {
        title
        id
        uri
      }
    },
    allWpCaseStudy {
      nodes {
        id
        title
        uri
      }
    }
  }
`