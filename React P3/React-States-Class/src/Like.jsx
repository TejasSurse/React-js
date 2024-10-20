import { useState } from "react";

function Like(){
    const [likes, setLikes] = useState(false);
    const [count, setCount] = useState(1);
    console.log("Like count ",  count);

    let toogleLike = ()=>{
        setLikes(!likes);
        if(likes){
            setCount(count + 1);
        }
       
    };
    console.log("Like Couunt ");
    let likeStyle = {color : "red", fontSize : "2rem"};
    return(
        <div>
            <p> {count}</p>
            <p onClick={toogleLike}>
                {likes ? 
                (<i className="fa-regular fa-heart" ></i>) : (<i className="fa-solid fa-heart" style={likeStyle}></i>)
            }
            </p>
        </div>
    );

}

export default  Like;
