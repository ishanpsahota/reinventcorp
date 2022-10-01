import * as React from 'react';
import './_blogs.scss';

import GlassCircles from '../../components/Common/GlassCircles';

function Blogs() {
    return (
        <div className='blogs-container fade-in'>                        
            <div className='blogs-wrapper '>                      
                <h1 className='display-1 my-auto'>
                    We will be back shortly! 
                </h1>                
            </div>
            <GlassCircles />            
        </div>        
    )
}

export default Blogs;