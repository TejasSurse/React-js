let count = 1;
function userInterested(){
    console.log("User interested in this, Comes here ",count++ , " Times ");
}

function HandelingNonClick(){
    return (
        <>
            <p onMouseOver={userInterested} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsum eveniet voluptate aliquam doloremque, fugiat aspernatur possimus molestiae dicta iure ex corrupti non nulla odio exercitationem doloribus, dolore recusandae quis!</p>
        </>
    );
}

export { HandelingNonClick };
