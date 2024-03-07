import { useState } from "react";
import Menulist from "./menulist";
import {FaMinus, FaPlus} from 'react-icons/fa'


export default function Menuitem ({item}){

 const [displayCuChi,setDispalyCuChi] = useState({})

 function handletogglechild(getcurrentlabel){
  setDispalyCuChi({...displayCuChi,[getcurrentlabel] : !displayCuChi[getcurrentlabel]})
 }

  return (
    <li className="list">
   <div >
   <p>{item.label}</p>
   {
    item && item.children && item.children.length ?
    <span onClick={()=>handletogglechild(item.label)}>
    {
      displayCuChi[item.label]? <FaMinus/> : <FaPlus/>
    }
      
    </span>
    :null
   }
   </div>

   {
    item && item.children && item.children.length > 0 && displayCuChi[item.label] ? 
    <Menulist list={item.children}/>
    :null
   }
    </li>
  )
}

