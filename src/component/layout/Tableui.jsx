import ApiStateCall from "../page/ApiStateCall"

const Tableui = ({userId,id,title,body})=>{
    return(
        <>
        
            <tbody >
               <tr>
                
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
               </tr>
            </tbody>
       
        </>
    )
}
export default Tableui;