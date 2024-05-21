import React from 'react'
const slideImages = {
 // slide inages of ducks
}
function Home()  {
    <div className='home-body'>
        <div className='slide-container'>
            <Slide>
                {slideImages.map((slideImage, index)=>{
                    <div key={index}>
                        {/* duck img */}
                    </div>
                })}
            </Slide>
        </div>
    </div>
}