import React, { useState } from "react";

function NewContact(props) {
    const [isEditing, setEditing] = useState(false);
    const [hasPhoto, setHasPhoto] = useState(false);
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
        setHasPhoto(true);
    }

        function handleSubmit(event) {
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

        function edit() {
            setEditing(true);
        }

    return (
    <div>
        <button onClick={edit} style={{display: isEditing ? "none" : "block"}}>Add Contact</button>
        <form style={{display: isEditing ? "block" : "none"}}>
            {isEditing && (
                <>
                    <input 
                    name = "imgUrl"
                    onChange={loadFile}
                    placeholder="Contact Photo"
                    type = "file"
                    accept = "image/*"
                    />
                    <input 
                    name = "name"
                    onChange={handleChange}
                    value = {contact.name}
                    placeholder="Name"
                    required
                    />
                    <input 
                    name = "number"
                    onChange={handleChange}
                    value = {contact.number}
                    placeholder="Number"
                    />
                    <input 
                    name = "email"
                    onChange={handleChange}
                    value = {contact.email}
                    placeholder="Email"
                    />
                    <input
                    type="submit"
                    value="Add Contact"
                    onClick={handleSubmit}
                    />
                </>
            )} 
        </form>
    </div>
    );
}

export default NewContact;