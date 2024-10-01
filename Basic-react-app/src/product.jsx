import "./product.css";
function Product({title, description, featureArr, featureObj}){
    console.log("passed array is ", featureArr);
    console.log("Passed Object is ", featureObj);
    let isDiscount = title == "Phone" ? "10% Discount" : "";
    // or 2nd way is with mapping 
    //let list = featureArr.map((feature)=> <li>{feature}</li>);

    // style with condition 
    let stylex = {backgroundColor : isDiscount ?  "Orange" : "" };
    

    return (
        <div className="Product" style={stylex}> 
            <h3>{title}</h3>
            <h5>{description}</h5>
            
            <p>{isDiscount}</p>
            {//
           // <p>{list}</p>
            //<p>{featureArr}</p>
            
            //<p>Object is {featureObj.b}</p>
            //<p>{arrwithlist}</p>
            }
        
           
        </div>
    )
}
// genearally we prefare class name  similar to Component name 
export default Product;


// props - values that passed as argument in fuction 