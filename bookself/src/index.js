import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const First=()=>{
    return (
        <>
        <h1>Book Shelf</h1>

        
    </>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<First></First>)

// export default First;