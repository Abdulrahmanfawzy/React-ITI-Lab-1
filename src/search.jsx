
function Search({searchProduct}){
    
    return <>
        <div className="my-5">
            <input type="text" onChange={(e)=>searchProduct(e.target.value)} placeholder="Search your fav..." className="form-control" />
        </div>
    </>
    
}

export default Search;