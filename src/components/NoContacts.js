import React from "react";

function NoContacts({hasContacts}) {
    return (
        <div className="no-contacts">
            <h3 style={{display: hasContacts ? "none" : "block"}}>go ahead, add some contacts. it'll be fun. </h3>
        </div>
    );
}

export default NoContacts;