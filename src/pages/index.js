import React from "react"
import DbsLogo from "../assets/svg/dbs-logo.inline.svg"

/** See todo file for next steps */

const HomePage = () => (
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

    <div>
      Read our blogs
    </div> 

    <div>
      Read our case studies
    </div>
    
    
  </div>
);

export default HomePage