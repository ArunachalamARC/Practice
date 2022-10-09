import React from 'react'

const Form = () => {
  return (
    <form className='form'>
    <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <div >
          Name
        </div>

        <div>
        Email
      </div>
      </div>
      <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}> 
      <div >
       <input type='text' placeholder='Enter Your Full Name'/>
      </div>
      <div>
      <input type='text' placeholder='Enter your Email'/>
     </div>
    
      </div>
      <div>
      Phone Number
    </div>
    <div>
     <input type='text'/>
    </div>
    <div>
    App/Website Link (optional)
  </div>
  <div>
   <input type='text'/>
  </div>
  <div>
  Monthly Revenue (USD)
</div>
<div>
 <input type='text'/>
</div>
<div>
Name
</div>
<div>
<button>Get Starte</button>
</div>
    </form>
  )
}

export default Form