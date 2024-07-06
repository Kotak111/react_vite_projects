import './index.css'
// const CardUi = (props) =>{
//     return(
//         <>
//         <div className="card" >
//         <img src="..." class="card-img-top" alt="images"/>
//   <div className="card-body">
//     <h5 className="card-title">{props.title}</h5>
//     <p className="card-text">{props.para}</p>
    
//   </div>
// </div>


//         </>
//     )
// }

const cardui = ({title,para,src}) =>{
    return(
        <>
         <div className="card" >
         <img src={src??"no data"} className="card-img-top " alt="images" />
   <div className="card-body">
     <h5 className="card-title">{title??"no data"}</h5>
     <p className="card-text">{para??"no data"}</p>
    
   </div>
 </div>
        </>
    )
}
export default cardui;