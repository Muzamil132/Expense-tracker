import React ,{useContext} from 'react'
import {GlobalContext} from '../State/InitialState'
function Item({item}) {
    const {deleteItem} =useContext(GlobalContext)
    const sign= item.amount>0?('+') :'-'
    return (
        <div>
           <li className= {item.amount>0?" plus list-group": "minus list-group"}>
                    <div className="d-flex justify-content-between">
                     <h5>{item.text}</h5>
                     <h5>  <apan>{sign}</apan>{Math.abs(item.amount)}$</h5>
                      <button  type="button" className="btn btn-primary"  
                        onClick={()=>deleteItem(item.id)}    
                            >delete</button>
                    </div>
                      </li>  
        </div>
    )
}

export default Item
