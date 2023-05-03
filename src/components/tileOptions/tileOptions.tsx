import React from 'react';

import './tileOptions.css'

const tileOptions = ()=>{

    return(
       <section>
        
         
         <div className='colorOptions'>
            <div className="house featureType"></div>
            <div className="colorName">house</div>
         </div>
        
        <div className='colorOptions'>
            <div className="forest featureType"></div>
            <div className="colorName">forest</div>
        </div>
        <div className='colorOptions'>
            <div className="water featureType"></div>
            <div className="colorName">water</div>
        </div>
        <div className='colorOptions'>
            <div className="land featureType"></div>
            <div className="colorName">Land</div>
        </div>
         
    
        </section>
    )
}

export default tileOptions;
