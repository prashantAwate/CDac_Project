// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function ViewProduct() 
// {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/getallproducts")
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, []);

//   return (
//     <div className="container-fluid mt-4 border bg-light">
//       <table className="table table-striped">
//         <tbody>
//           {data.map((v, index) => (
//             <tr key={v.id} className={`bg-${index % 6 + 1}`}>
//               <td style={{ width: '15%' }}>
//                 <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail" style={{ width: '200px', height: '200px' }} />
//               </td>
//               <td style={{ width: '85%' }}>
//                 <div className="product-details">
//                   <div className="product-name">
//                     <strong>Product Name:</strong> {v.name}
//                   </div>
                 
//                   <div className="product-brand">
//                     <strong>Brand:</strong> {v.brand_id.name}
//                   </div>

//                   <div className="product-category">
//                     <strong>Category:</strong> {v.cat_id.name}
//                   </div>

//                   <div className="product-description">
//                     <strong>Product Description:</strong> {v.description}
//                   </div>
                
//                   <div className="product-price text-success">
//                     <strong>Price:</strong> ₹{v.price}.00
//                   </div>

//                   <div className="product-price text-success">
//                     <strong>Price:</strong> ₹{v.stock_level}.00
//                   </div>
//                   <div className="add-to-cart">
//                     <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function ViewProduct() 
// {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/getallproducts")
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, []);

//   return (
//     <div className="container-fluid mt-4 border bg-light">
//       <table className="table table-striped">
//         <tbody>
//           {data.map((v, index) => (
//             <React.Fragment key={v.id}>
//               <tr className={`bg-${index % 6 + 1}`}>
//                 <td style={{ width: '15%' }}>
//                   <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail" style={{ width: '200px', height: '200px' }} />
//                 </td>
//               </tr>
//               <tr className={`bg-${index % 6 + 1}`}>
//                 <td colSpan="2">
//                   <div className="product-details">
//                     <div className="product-name">
//                       <strong>Product Name:</strong> {v.name}
//                     </div>
//                     <div className="product-brand">
//                       <strong>Brand:</strong> {v.brand_id.name}
//                     </div>
//                     <div className="product-category">
//                       <strong>Category:</strong> {v.cat_id.name}
//                     </div>
//                     <div className="product-description">
//                       <strong>Product Description:</strong> {v.description}
//                     </div>
//                     <div className="product-price text-success">
//                       <strong>Price:</strong> ₹{v.price}.00
//                     </div>
//                     <div className="product-stock text-success">
//                       <strong>Stock Level:</strong> {v.stock_level}
//                     </div>
//                     <div className="add-to-cart">
//                       <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );   
// }


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function ViewProduct() 
// {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/getallproducts")
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, []);

//   return (
//     <div className="container-fluid mt-4 border bg-light">
//       {data.map((v, index) => (
//         <div key={v.id} className={`product-container bg-${index % 6 + 1}`}>
//           <div className="product-image">
//             <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail" style={{ width: '200px', height: '200px' }} />
//           </div>
//           <br></br>
//           <div className="product-details">
//             <div className="product-name">
//               <strong>Product Name:</strong> {v.name}
//             </div>
//             <div className="product-brand">
//               <strong>Brand:</strong> {v.brand_id.name}
//             </div>
//             <div className="product-category">
//               <strong>Category:</strong> {v.cat_id.name}
//             </div>
//             <div className="product-description">
//               <strong>Product Description:</strong> {v.description}
//             </div>
//             <div className="product-price text-success">
//               <strong>Price:</strong> ₹{v.price}.00
//             </div>
//             <div className="product-stock text-success">
//               <strong>Stock Level:</strong> {v.stock_level}
//             </div>
//             <div className="add-to-cart">
//               <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );   
// }


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function ViewProduct() 
// {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/getallproducts")
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, []);

//   return (
//     <div className="container-fluid mt-4 bg-light">
//       {data.map((v, index) => (
//         <div key={v.id} className={`product-container bg-${index % 6 + 1}`}>
//           <div className="product-content">
//             <div className="product-image">
//               <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail" style={{ width: '200px', height: '200px' }} />
//             </div>
//             <div className="product-details">
//               <div className="product-name">
//                 <strong>Product Name:</strong> {v.name}
//               </div>
//               <div className="product-brand">
//                 <strong>Brand:</strong> {v.brand_id.name}
//               </div>
//               <div className="product-category">
//                 <strong>Category:</strong> {v.cat_id.name}
//               </div>
//               <div className="product-description">
//                 <strong>Product Description:</strong> {v.description}
//               </div>
//               <div className="product-price text-success">
//                 <strong>Price:</strong> ₹{v.price}.00
//               </div>
//               <div className="product-stock text-success">
//                 <strong>Stock Level:</strong> {v.stock_level}
//               </div>
//               <div className="add-to-cart">
//                 <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
//               </div>
//             </div>
//           </div>
//           {index !== data.length - 1 && <hr className="product-separator" />}
//         </div>
//       ))}
//     </div>
//   );   
// }



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewProduct() 
{
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getallproducts")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
    <div className="container-fluid mt-4 bg-light">
      {data.map((v, index) => (
        <div key={v.id} className="product-container">
          <div className={`product-content bg-${index % 6 + 1}`}>
            <div className="product-image">
              <img src={`data:image/png;base64,${v.img_url}`} alt="Product" className="img-thumbnail" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="product-details">
              <div className="product-name">
                <strong>Product Name:</strong> {v.name}
              </div>
              <div className="product-brand">
                <strong>Brand:</strong> {v.brand_id.name}
              </div>
              <div className="product-category">
                <strong>Category:</strong> {v.cat_id.name}
              </div>
              <div className="product-description">
                <strong>Product Description:</strong> {v.description}
              </div>
              <div className="product-price text-success">
                <strong>Price:</strong> ₹{v.price}.00
              </div>
              <div className="product-stock text-success">
                <strong>Stock Level:</strong> {v.stock_level}
              </div>
              <div className="add-to-cart">
                <Link to="/add_to_cart" className="btn btn-primary btn-block">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );   
}

