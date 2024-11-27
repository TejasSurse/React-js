import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5
    });


    let handleInputChange = (event) =>{
        // currData pe changes - return new object spread - event .target.name field name ke andsar new values assings 
        setFormData((currData)=>{
          return {...currData, [event.target.name] : event.target.value };  
        });
    }

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData();
        
    }
    return (
        <div>
        <h4>Give A Comment ! </h4>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} name="username"/>

            <br /><br />
            <textarea id="" placeholder="Remarks" value={formData.remarks}  name="remarks" onChange={handleInputChange} ></textarea>
            <br /><br />

            <input type="number" placeholder="Rating" min={1} max={5} value={formData.rating} onChange={handleInputChange}  name="rating"/>

            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}


/* 
in returning componnet it must have name - same as in state


Step-by-Step Explanation:
event:

The event object represents the event that triggered this function, which is typically a user typing into an input field.
event.target is the specific input field (or HTML element) that triggered the event.
event.target.name gives the name attribute of that input field, which is used to identify the field (e.g., "username" or "remarks").
event.target.value contains the new value entered by the user in the input field.
setFormData((currData) => {...}):

setFormData is used to update the formData state.
React’s useState provides a way to update state with a function. The function takes the current state (currData) as its argument.
return { ...currData, [event.target.name]: event.target.value }:

{ ...currData } uses the spread operator to copy all the key-value pairs from the current currData object into a new object. This ensures that the previous state is preserved and only the updated field changes.
[event.target.name] is computed property syntax, dynamically creating or updating the property in the object based on the name of the input field (e.g., username, remarks, or rating).
event.target.value assigns the new value of the input field to the corresponding key in the object.
Why Use the Spread Operator?:

The spread operator creates a new object by copying all the existing properties from the current state. React encourages immutability in state updates, so instead of modifying the currData object directly, we create a new object and update the specific key-value pair.
Without the spread operator, you'd lose the rest of the formData fields when updating just one.

*/
