import React, { useState } from "react";

import placeholderImage from "../images/person.png";

function NewContact(props) {
    const [isEditing, setEditing] = useState(false);
    const [contact, setContact] = useState({
        imgUrl: "",
        name: "", 
        number: "", 
        email: "" 
        });

    function handleChange(event) {
        const { name, value } = event.target;

        setContact((prevContact) => {
            return {
                ...prevContact,
                [name]: value
            };
        });
    }

    function loadFile(event) {
        const { name } = event.target;
        let url = URL.createObjectURL(event.target.files[0]);
            setContact((prevContact) => {
                return {
                    ...prevContact,
                    [name]: url
                };
            }); 
        
    }

        function handleSubmit(event) {
            if (!contact.name) {
                alert('A name is required');
                event.preventDefault();
                return;
            } else {
                props.addContact(contact);
                setContact({
                    imgUrl: "",
                    name: "",
                    number: "",
                    email: ""
                });
                setEditing(false);
                event.preventDefault();
            }
            
        }

        function edit() {
            setEditing(true);
        }

    return (
    <div className="new-contact-form">
        <button onClick={edit} style={{display: isEditing ? "none" : "block"}}>Add <i className="fa-solid fa-address-card"></i></button>
        <form style={{display: isEditing ? "block" : "none"}}>
            {isEditing && (
                <>
                <label for="imgUrl">Contact Photo</label>
                <input
                    name = "imgUrl"
                    onChange={loadFile}
                    placeholder="Contact Photo"
                    type = "file"
                    accept = "image/*" 
                    />
                    
                <div className = "contact-card">
                    <img
                    className = "contact-photo"
                    src={contact.imgUrl ? contact.imgUrl : placeholderImage}
                    />
                    
                    <input
                    className = "contact-name"
                    name = "name"
                    onChange={handleChange}
                    value = {contact.name}
                    placeholder="Name"
                    required
                    />
                    <input 
                    className="contact-number"
                    name = "number"
                    onChange={handleChange}
                    value = {contact.number}
                    placeholder="Number"
                    />
                    <input 
                    className="contact-email"
                    name = "email"
                    onChange={handleChange}
                    value = {contact.email}
                    placeholder="Email"
                    />
                    <button type="submit" onClick={handleSubmit} className="card-button"><i className="fa-solid fa-plus"></i></button>
                </div>
                </>
            )} 
        </form>
    </div>
    );
}

export default NewContact;