import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className='relative bottom-0 w-full color-secondary text-gray-200 h-[10vh]'>
            <div className='mx-auto w-full p-4 lg:w-3/4 h-full flex flex-row justify-between items-center'>
                <div className='text-xs lg:text-sm'>
                    <p>© 2023 Instec Digital Systems. All Rights Reserved.</p>
                </div>
                <div className='flex space-x-4'>
                    <a href='https://www.linkedin.com/company/instec-digital-systems/' className='transition-transform hover:-translate-y-1'>
                        <img className='w-4 h-4' src='../static/images/linkedin.png'></img>
                    </a>
                    <a href='mailto:info@instecdigital.com' className='transition-transform hover:-translate-y-1'>
                        <img className='w-4 h-4' src='../static/images/email.png'></img>
                    </a>
                </div>
            </div>
        </section>
    </div>  
  )
}

export default Footer
