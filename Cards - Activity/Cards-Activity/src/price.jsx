export default function price({oldPrice, newPrice}){
    return (
        <div>
            <span>{oldPrice}</span>
            &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}