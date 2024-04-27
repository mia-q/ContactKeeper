import React from "react";
import phoneLogo from "../images/phone1.png";

function Header() {

    return (
        <>
        
            <header>
                <div class="container">
                   <img src={phoneLogo} />
                    <h1>ContactKeeper</h1> 
                </div>
                
            </header>
            
        </>
        
    );
}

export default Header;