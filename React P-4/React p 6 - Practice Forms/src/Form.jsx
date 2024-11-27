import { useState } from "react";

export default function Form() {
    // Writing common object for all the fields 
    let [formData, setFormData] = useState({
        fullName: "Enter Full Name",
        userName: "Enter UserName",
        password: "Enter Password",
    });

    // Common handler for all the inputs 
    let handleInputChange = (event) => {
        console.log('Input changed:', event.target.name, event.target.value);
        setFormData((currData) => {
            console.log('Updated form data:', { ...currData, [event.target.name]: event.target.value });
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default action of the form
        console.log('Form submitted:', formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">UserName</label>
            <input
                placeholder="Enter Your UserName"
                type="text"
                value={formData.userName}
                onChange={handleInputChange}
                id="userName"
                name="userName" // Corrected to match the key in formData
            />
            <br /><br />
            <label htmlFor="fullName">Full Name</label>
            <input
                placeholder="Enter Your Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                id="fullName"
                name="fullName" // Corrected to match the key in formData
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input
                placeholder="Enter Your Password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                name="password" // Corrected to match the key in formData
            />
            <br /><br />
            <button type="submit">Submit</button>  
        </form>
    );
}
