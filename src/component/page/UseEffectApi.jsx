import { useEffect, useState } from "react"
import SecondTable from "../layout/SecondTable";
import './style.css'

const UseEffectApi = () => {
    const [data, setData] = useState([]);
    async function show() {
        await fetch("https://dummyjson.com/products")
            .then(async (res) => {
                const result = await res.json();
                // console.log(result);
                console.table(result.products);
                setData(result.products);

            })
    }
    useEffect(() => {
        show();

    }, [])

    return (
        <>
            <h1 className="bg-danger text-center" >Fetch Api Using UseEffect</h1>
            {
                data.length > 0 ?
                    (
                        <div className="container">

                            <table className="table table-striped table-bordered">
                                <tr>

                                    <th>id</th>
                                    <th>title</th>
                                    <th>description</th>
                                    <th>price</th>
                                    <th>stock</th>
                                    <th>brand</th>
                                    <th>category</th>
                                    <th>thumbnail</th>
                                    <th>images</th>
                                </tr>

                                {


                                    data.map((items) => {
                                        return (
                                            <>
                                                <SecondTable id={items.id} title={items.title} description={items.description} price={items.price}
                                                stock={items.stock} brand={items.brand } category={items.category} thumbnail={items.thumbnail}
                                                images={items.images.map((yes) => (
                                                    <td>
                                                    <img
                                                      src={yes}
                                                      style={{ width: '100px', height: '70px', marginRight: '5px',display:"flex" ,border:"2px solid black",marginTop:"9px"}}
                                                    /></td>
                                                  ))}
                                                 />
                                            </>
                                        )

                                    })


                                }



                            </table>  </div>

                    )
                    :
                    (<div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>)
            }
        </>
    )
}
export default UseEffectApi;