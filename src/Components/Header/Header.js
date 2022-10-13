import React from 'react'

const Header = () => {
  return (
    <div className='header_main'>
     <div className='header_text' >
     <h1>Let’s Build Something
     amazing with GPT-3
     OpenAI</h1>
     
     <div>
       <p>Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
     </div>
     <div className='header_input'>
      <input type='text'  placeholder='You Email address'/>
      <button>Get Started</button>
     </div>
     <div className='header_people'>
     <img src="https://i.ibb.co/Y39sQnB/people.png" alt="people" border="0" />
     <p>1,600 people requested access a visit in last 24 hours</p>
     </div>
     </div>
     <div className='header_img'>
     <img src="https://i.ibb.co/7vH2mdw/ai.png" alt="ai" border="0" />
     </div>
    </div>
  )
}

export default Header



