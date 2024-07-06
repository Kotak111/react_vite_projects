import UseEffectApi from "../page/UseEffectApi";

const SecondTable = ({id,title,description,price,stock,brand,category,thumbnail,images})=>{
    return(
        <>
        
            <tbody >
               <tr>
                
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{description}</td>
                                        <td>{price}</td>
                                        <td>{stock}</td>
                                        <td>{brand}</td>
                                        <td>{category}</td>
                                        <td>{thumbnail}</td>
                                            <td>{images}</td>
               </tr>
            </tbody>
       
        </>
    )
}
export default SecondTable;



// {product.images.map((image, index) => (
//     <img
//       key={index}
//       src={image}
//       alt={`Product ${product.id} Image ${index + 1}`}
//       style={{ width: '50px', height: '50px', marginRight: '5px' }}
//     />
//   ))}