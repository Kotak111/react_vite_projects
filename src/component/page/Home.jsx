import CardUi from "../layout/CardUi";
import Carddata from "../layout/Carddata";
import UseState from "./UseState";

const Home = () =>{
    return(
        <>
        <h1>Home page</h1>

        {/* <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <CardUi title="title1" para="para1"/>
                </div>
                <div className="col-lg-4">
                <CardUi title="title1" para="para1"/>
                </div>
                <div className="col-lg-4">
                <CardUi title="title1" para="para1"/>
                </div>

            </div>
        </div> */}
        <div className="container">
            <div className="row ">
                {
                    Carddata.map((items)=>{
                        return(
                            <>
                             <div className="col-lg-4 mt-4">
                <CardUi  src={items.src} title={items.title} para={items.para}/>
                </div>
                            </>
                        )
                    })
                }
            </div></div>


               

        </>
    )
    
}
export default Home;


