import React from 'react'
import Box from '../src/Components/Box'
import Form from '../src/Components/form'
import Header from '../src/Components/Header'
import Text from '../src/Components/Text'

const Practice = () => {
  return (
    <section>
    <div className='header'>
       <Header/>
    </div>
    <div className='text' >
       <Text/>
    </div>
    <div>
      <Box/>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
     <Form/>
    </div>
    </section>
  )
}

export default Practice