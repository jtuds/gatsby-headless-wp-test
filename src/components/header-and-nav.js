import React from "react"
// import { Link } from "gatsby"
import DbsLogo from "../assets/svg/dbs-logo.inline.svg"

const HeaderAndNav = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 100px' }}>
      <div>0161</div>
      <DbsLogo />
      <nav>
        Menu
      </nav>
    </div>
    <div style={{backgroundColor:'#fdefe2', height: '80vh'}}>
      <h1>Thinking. Doing. Improving</h1>
    </div>
  </div>
)

export default HeaderAndNav

