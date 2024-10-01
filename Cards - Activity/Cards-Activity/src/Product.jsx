import './Product.css'
import Price from './price';
function Product({title, idx, oldPrice, newPrice}){
    let oldPrices = ["12,222", "23,232","1231", "345"];
    let newPrices = ["11,222", "22,232","1131", "245"];
    return (
        <div className="Product" > 
           <h4>{title}</h4>
           <p>Description</p>
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;


