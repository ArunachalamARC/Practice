import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section>
       <div >
       <Image
      src='data:image/png;base64,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 '
      alt="Picture of the logo"
      width={194}
      height={25}
    />
       </div>
    
    </section>
  )
}

export default Header