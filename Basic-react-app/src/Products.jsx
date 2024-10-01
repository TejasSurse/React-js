import Product from "./product";

function Products(){
    let array = ["hie ", "i",  "Am", "arr"];
    let Obj = {a: "Hie", b : "I AM", c:"Object"};
    // arr with list 
   // let arrwithli = [<li>hie</li>, <li>Hello</li>, <li>HieHieHie</li>]

    return (
        <>
        <Product title="Phone" description="8gb ram 128gb storage" />
        <Product title="laptop" description="32gb ram 128gb  storage "/>
        <Product title="pc " description="64gb ram 128gb storage "/>
        {
          // above line is one way to send array 
        /* Rendering Arrays 
        1 - put each element in the list 
         ex let arr = [<li>he</li>, <li> hie </li> ...]
        
        2 - map elemnt before rendering in list and then send list 
        ex = let list = arr.map((ar) => <li> ar </li>);
          
          
          
           */
        }
  
      </>///
      
    );
}

export default Products;

