import React, { useState } from "react";

function NewContact(props) {
    const [isEditing, setEditing] = useState(false);
    // const [imageURL, setImageURL] = useState("../../public/images/person-avatar.png");
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
    <div>
        <button onClick={edit} style={{display: isEditing ? "none" : "block"}}>New Contact <i className="fa-solid fa-address-card"></i></button>
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
                    <button type="submit" onClick={handleSubmit}><i className="fa-solid fa-plus"></i></button>
                </>
            )} 
        </form>
    </div>
    );
}

export default NewContact;