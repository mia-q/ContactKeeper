import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import placeholderImage from "../images/person.png";

function NewContact(props) {
    const [isOpen, setIsOpen] = useState(false);
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
                setIsOpen(false);
                event.preventDefault();
            }
            
        }

        function edit() {
            setEditing(true);
            setIsOpen(true);
        }

        function close() {
            setEditing(false);
            setIsOpen(false);
        }

    return (
    <div className="new-contact-form">
        <Dialog 
            open={isOpen} 
            onClose={() => setIsOpen(false)} 
            className="relative z-50"
        >
            <div className="backdrop" aria-hidden="true" />
                <div className="dialog-container">
                    <Dialog.Panel className="dialog-panel">
                        <Dialog.Title>Create New Contact</Dialog.Title>
                        <form style={{display: isEditing ? "block" : "none"}}>
                            {isEditing && (
                                <>
                                    <label htmlFor="imgUrl">Contact Photo</label>
                                    <input
                                        name = "imgUrl"
                                        onChange={loadFile}
                                        placeholder="Contact Photo"
                                        type = "file"
                                        accept = "image/*" 
                                        />
                                    <div className = "contact-card input">
                                        <img
                                        className = "contact-photo"
                                        src={contact.imgUrl ? contact.imgUrl : placeholderImage}
                                        />
                                        
                                        <input
                                        className = "contact-name input"
                                        name = "name"
                                        onChange={handleChange}
                                        value = {contact.name}
                                        placeholder="Name"
                                        required
                                        />
                                        <input 
                                        className="contact-number input"
                                        name = "number"
                                        onChange={handleChange}
                                        value = {contact.number}
                                        placeholder="Number"
                                        />
                                        <input 
                                        className="contact-email input"
                                        name = "email"
                                        onChange={handleChange}
                                        value = {contact.email}
                                        placeholder="Email"
                                        />
                                        <div className="button-container">
                                            <button type="submit" onClick={handleSubmit} className="card-button"><i className="fa-solid fa-plus"></i> Add</button>                
                                            <button onClick={close} className="cancel">Cancel</button>
                                        </div>
                                    </div>
                                </>
                            )} 
                        </form> 
                </Dialog.Panel>
            </div>
        </Dialog>
        <button id =" open-modal " type="button" onClick={edit} >Add <i className="fa-solid fa-address-card"></i></button>
    </div>
    );
}

export default NewContact;