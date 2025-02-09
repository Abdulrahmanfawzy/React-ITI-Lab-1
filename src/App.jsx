import { useEffect, useState } from "react";
import food1 from "./assets/images/burger4.png";
import food2 from "./assets/images/burger1.png";
import food3 from "./assets/images/burger2.png";
import Card from "./card";
import Search from "./search";

function App(){
  let [products , setProducts] = useState([
    {id: 1, image: food1 , price: 200 , title: "sushi food"},
    {id: 2, image: food2 , price: 230 , title: "gambaray food"},
    {id: 3, image: food3 , price: 262 ,title: "fish food"}
  ]);
  const [originalProducts, setOriginalProducts] = useState([]);


  useEffect(() => {
    setOriginalProducts(products); // Save the initial state
  }, []);

  function updateProduct(id){
    const product = products.find(el=>{
      if(el.id == id){
        el.price += 1;
        return el
      }
    });
    setProducts([...products]);
  }

  function deleteProduct(id){
    const item = products.filter(item=>item.id != id);
    setProducts(item);
  }

  function searchProduct(val) {
    const filteredProducts = val
      ? products.filter((product) =>
          product.title.toLowerCase().includes(val.toLowerCase())
        )
      : originalProducts;
      
    setProducts(filteredProducts);
  }
  

  return (
    <>
      <div className="container">
          <Search searchProduct={searchProduct} />
          <div className="row">
            {products && products.length > 0 ? products.map(product=><Card deleteProduct={deleteProduct} updateProduct={updateProduct} key={product.id} product={product} />) : <h2 className="text-center">No products found...</h2>} 
        </div>
      </div>
    </>
  )
}

export default App;