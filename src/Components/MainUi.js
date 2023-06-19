import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addData} from "../Redux/Actions/All_actions"
const MainUI = () => {
  const list = useSelector((state) => state.All_Data.data);

  const dispatch = useDispatch();

  console.log(list);

  const [cont,setCont] = useState("");
  


  return (
   
    <div>


    <h1> Add Your List here </h1> 

    <input type="text" onChange={ (e)=>setCont(e.target.value)}/> 

    <button onClick={ dispatch( addData({id:1,content:cont}))}> Submit </button>



    </div>
    
  )
};

export default MainUI;
