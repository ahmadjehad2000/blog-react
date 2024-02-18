import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import MContext from '../../contexts/data/MContext';

function Hero() {
    const context = useContext(MContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,4,17,1) 49%, rgba(29,3,121,0.798739564185049) 100%)' : 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)' }}>
            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                    
                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>Blogs</h1>
                        </div>
                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                        </p>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Hero