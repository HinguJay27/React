import React from 'react'

const ChildComponents = React.memo(
    (props) => {
    
        console.log("re render");
            
            return (
                <div>
                    <button >{props.buttonName}</button>
                </div>
            )
    }
);


export default ChildComponents