import Product from "./Product";

function Products(){
    let styles = {
      display : "flex",
      flexWrap : "wrap",
      justifyContent : "center",
      alighItems : "center",
      marginLeft : "20px",
      width : "200px",
      hegiht : "200px",
    }
    
    return (
        <div style={styles}>
        <Product title="Mac "   idx={0} />
        <Product title="iphone" idx={1} />
        <Product title="charger" idx={2}  />
        <Product title="ipod"     idx={3}  />
      </div>
      
    );
}

export default Products;

