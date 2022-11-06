import React, { Children } from "react";



function Content(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }){
    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default Content