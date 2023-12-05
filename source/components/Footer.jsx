import React from "react";
const date = new date();
const currentYear = date.getFullYear();

function footer() {
    return (<footer> 
           <p>Copyright @ {currentYear}</p>
    </footer>  );
}

export default footer;