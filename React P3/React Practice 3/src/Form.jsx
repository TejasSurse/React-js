function handleFormSubmt(event){
    event.preventDefault();// if we dont write it console get cleared automatically 
    console.log("form Was Submitted");
}

function Form(){
    return (
        <>
            <form onSubmit={handleFormSubmt}>
                <input type="text" placeholder="Enter Your Name " />
                <button>Submit</button>
            </form>
        </>
    );
}

export default Form;