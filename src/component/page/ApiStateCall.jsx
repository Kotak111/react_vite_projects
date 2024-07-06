import { useState } from "react";
import Tableui from "../layout/Tableui";


const ApiStateCall = () => {
    const [data, setData] = useState([]);
    const showApi = async () => {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
            const result = await res.json();
            // console.table(data);
            setData(result);

        })
    }
    return (
        <>
            <h1 className="text-center">Api calling using Usestate </h1>
            <button className="btn btn-primary" onClick={showApi}>show Api</button>
            {
                data.length > 0 ?
                    (
                        <div className="container">
                          
                                <table className="table table-striped table-bordered">
                                   <tr>
                                       
                                        <th>id</th>
                                        <th>title</th>
                                        <th>body</th>
                                        </tr>

                                        {


                                            data.map((items) => {
                                                return (
                                                    <>
                                                        <Tableui  id={items.id} title={items.title} body={items.body}></Tableui>
                                                    </>
                                                )

                                            })


                                        }

                              

                                </table>  </div>
                        
                    )
                    :
                    (<div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>)
            }

        </>
    )
}
export default ApiStateCall;