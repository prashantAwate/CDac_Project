export default function AddProduct()
{
  return(


    <div>
        <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label"> Enter Name Of Product: </label>
                    <input type="text" className="form-control" id="name" name="name" value={info.name}
                    onChange={(e)=>{dispatch({type:'update',fld:'name',val: e.target.value})}} 
                    /></div>

                   <div className="mb-3">
                    <label htmlFor="cname" className="form-label"> Select Category: </label>
                    <input type="text" className="form-control" id="cname" name="cname" value={info.cname}
                    onChange={(e)=>{dispatch({type:'update',fld:'cname',val: e.target.value})}} 
                    /></div>

                    <div className="mb-3">
                    <label htmlFor="bname" className="form-label"> Select Brand: </label>
                    <input type="text" className="form-control" id="bbname" name="bname" value={info.bname}
                    onChange={(e)=>{dispatch({type:'update',fld:'bname',val: e.target.value})}} 
                    /></div>

                   <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Enter Description: </label>
                    <input type="text" className="form-control" id="description" name="description" value={info.description}
                    onChange={(e)=>{dispatch({type:'update',fld:'description',val: e.target.value})}} 
                    />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label"> Enter Price: </label>
                    <input type="number" className="form-control" id="price" name="price" value={info.price} 
                    onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="stock_level" className="form-label"> Enter Stock: </label>
                    <input type="number" className="form-control" id="stock_level" name="stock_level" value={info.stock_level} 
                    onChange={(e)=>{dispatch({type:'update',fld:'stock_level',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="stock_level" className="form-label"> Upload Image: </label>
                    <input type="number" className="form-control" id="img_url" name="img_url" value={info.img_url} 
                    onChange={(e)=>{dispatch({type:'update',fld:'img_url',val:e.target.value})}}
                    />
                </div>


                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>LOGIN</button>
                <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>


        </form>
    </div>
  )
}