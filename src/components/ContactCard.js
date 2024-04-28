import React, { useState } from "react";
import placeHolderImage from "../images/person.png";
function ContactCard(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }


        return (
            <div className="contact-card">
                <img 
                className="contact-photo"
                src={props.imgUrl ? props.imgUrl : placeHolderImage} 
                alt={props.name} 
                />
                <h3 className = "contact-name">{props.name}</h3>
                <p className = "contact-number">{props.number}</p>
                <p className="contact-email">{props.email}</p>
                <div className="button-container">
                    <button onClick={handleDelete} className = "card-button"><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            );
    
}

export default ContactCard;