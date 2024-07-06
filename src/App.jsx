import Classcomp from "./component/layout/ClassComp"
import ApiStateCall from "./component/page/ApiStateCall"
import FetchApi from "./component/page/FecthApi"
import Home from "./component/page/Home"

import Counter from "./component/page/Counter"

import Form from "./component/page/Form"

import UseEffectApi from "./component/page/UseEffectApi"
import UseState from "./component/page/UseState"

import HookFomr from "./component/page/HookFomr"
import { Provider } from "react-redux"
import FunConcept from "./component/page/FunConcept"
import LocalStorage from "./component/page/LocalStorage"
import NewLocal from "./component/page/NewLocal"
import NextLocal from "./component/page/NextLocal"
// import { Store } from "./component/ReduxToolkit/Store"
// import UseCallback from "./component/page/UseCallback"
// import UseReducer from "./component/page/UseReducer"
// import UseRef from "./component/page/UseRef"
// import Slider from "./component/page/Slider"
// import Counter from "./component/hoc/Counter"
import FinalResult from "./component/hoc/FinalResult"
import CreateUser from "./Firebase/pages/CreateUser"
// import { Route,  BrowserRouter as  Router, Routes } from "react-router-dom"
import ViewUser from "./Firebase/pages/ViewUser"
import EditUser from "./Firebase/pages/EditUser"





function App() {
  return(
    <>
    <Home/>
    <FetchApi></FetchApi>
    <UseState/>
    <ApiStateCall/>
    <Classcomp title="class title"/>
   <UseEffectApi/>
 
    <Form></Form>
    <HookFomr/>
  <FunConcept/>
  <LocalStorage/>
  <NewLocal/> 
  <NextLocal/>
 {/* <Counter></Counter> */}
 {/* <UseCallback/>
 <UseReducer/> */}
 {/* <UseRef/> */}
 {/* <Slider/> */}
{/* <FinalResult/> */}
{/* <CreateUser/> */}
  <CreateUser></CreateUser>
    </>
  )
}

export default App
