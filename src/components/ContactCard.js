import React from "react";
import { ReactDOM } from "react";

function ContactCard(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }

    return (
        <div className="contact-card">
            <img 
            className="contact-photo"
            src={props.imgUrl} 
            alt={props.name} 
            />
            <h3>{props.name}</h3>
            <p>{props.number}</p>
            <p>{props.email}</p>
            <button onClick={handleDelete}>Remove Contact</button>
        </div>
    );
}

export default ContactCard;