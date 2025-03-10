import React from 'react'

function About(props) {
  return (
    <div class="about">
      <div class="image">
        {props.source}
       </div>
       <div class="about-content">
            <h1>About Me</h1>
            <h3>Full stack <span>Developer</span></h3>
            <p>Good Interpersonal skills, committed,result oriented,hard working with an quest and zeal to learn new
                technologies. I am skilled in desining and developing.My passion lies in creating captivating website
                design and implementing them for developing. I throughly research and analize the target audience and
                the clients specific requirements.</p>
            <div class="download-social">
                <p style={{color:"blue"}}>More about me..</p>
            </div>
        </div>
    </div>
  )
}

export default About