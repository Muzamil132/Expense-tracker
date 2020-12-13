import React,{useContext,useState} from 'react'
import {GlobalContext} from '../State/InitialState'
function Add() {
   const{Add} =useContext(GlobalContext)
    const [text,settext] =useState('')
    const [amount,setamount] =useState(0)
   console.log(text,amount)
    const submit=(e)=>{
      e.preventDefault()
      if(text==='' || amount===0){
        alert('Add Values')
      }
      else{
        Add({
          id:Math.random(),
          text,
          amount:+amount
        })
      }
      
      settext('')
      setamount('')

    }
    return (
    
       
       <div className="container">
       <div className="mt-3">
      <h4>Add Transaction</h4>
      <form onSubmit={submit}  >
      <div className="form-group">
    <label htmlFor="text">Text</label>
    <input value={text} type="text" class="form-control"
    onChange={(e)=>settext(e.target.value)}
      placeholder="Enter...."/>

     </div>
     <div className="form-group">
    <label htmlFor="Amount">Amount</label>
    <input type="text" class="form-control" 
    value={amount}
    onChange={(e)=>setamount(e.target.value)}
     placeholder="Enter Amount..."/>
    
     </div>
     
     <button className="btn btn-block btn-primary" type="submit">Add</button>
      </form>

      </div>
       </div>
        
    )
}

export default Add
