import React from 'react'

function Home(props) {
  return (
    <div class="home_container">
        <div class="home_detail">
        <h1>Hi Im <span style={{color:"red"}}>{props.name}</span></h1>
        <h3>{props.role}</h3>
        <p>Hi,I am looking for an innovative and challenging software development and testing environment which
                    can fully, utilize my capabilites and to be dynamic software professional working
                    systematically,building good logics to be globally competitive following the perfect principles of
                    time and quality techniques.</p>
        </div>
       <div class="image">
        {props.source}
       </div>
    </div>
  )
}

export default Home