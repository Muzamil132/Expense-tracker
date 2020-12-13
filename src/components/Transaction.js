import React,{useContext} from 'react'
import {GlobalContext} from '../State/InitialState'
import Item from './Item'

import '../App.css'
function Transaction() {
   
    const {transaction} =useContext(GlobalContext)

    return (
        <div className="container">
            <h3 className="mt-5">History</h3>
            <hr/>
            {transaction.map(item=>{
                return (
                  
                  <Item item={item}/>
                )
            })}
            
        </div>
    )
}

export default Transaction
