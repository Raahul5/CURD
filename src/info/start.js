import React from 'react';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter';
import HookCounter from './HookCounter';


class Apps extends React.Component{
    render (){
        return (
            <div>
                {/* <ClickCounter/>
                <HoverCounter/> */
                <HookCounter/>}
                
            </div>
        
        )
    }
       
   
} 
export default Apps
