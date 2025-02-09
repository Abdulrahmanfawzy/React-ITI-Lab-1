
function Card({product , updateProduct , deleteProduct}){
    console.log("product " + product);
    
    return <>

        {
            <div className="col-md-4">
                <div className="card text-center p-2">
                    <img src={product.image} alt={product.title} />
                    <h3 className="text-uppercase mt-2">{product.title}</h3>
                    <strong>${product.price}</strong>
                    <div className="mt-4">
                        <button onClick={()=>updateProduct(product.id)} className="btn btn-warning d-block w-100">Update price</button>
                        <button onClick={()=>deleteProduct(product.id)} className="btn btn-danger d-block w-100 mt-2">Delete</button>
                    </div>
                </div>
            </div>
            }
    </>
}

export default Card;