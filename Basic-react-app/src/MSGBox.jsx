function MSG({ name, message }) {
    let user1 = name === "Tejas"; 
    const stylex = { backgroundColor: user1 ? "blue" : "orange" };

    return (
        <div>
            <p style={stylex}>{name}</p>
            <p style={stylex}>{message}</p>
        </div>
    );
}

export default MSG;
