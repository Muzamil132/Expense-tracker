import React ,{useContext} from 'react'
import {GlobalContext} from '../State/InitialState'
function Income() {
    const {transaction} = useContext(GlobalContext)
    const expense = transaction.map(transaction=>transaction.amount)
                 .filter(amount=>amount<0)
                  .reduce((first,second)=> (first+=second),0)*(-1)

                  const Income = transaction.map(transaction=>transaction.amount)
                   .filter(amount=>amount>0)
                   .reduce((first,second)=> (first+=second),0)
 
    return (
        <div className="container">
        <div className="card shadow m-2 ">
        <div className=" d-flex">
       
        <div className="card-body ">
        <h4>INCOME</h4>
        <h5 className="text-primary">{Income}</h5>

        </div>
     
        
        <div className="card-body ">
        <h4>EXPENSE</h4>
        <h5 className="text-warning">{expense}</h5>

        </div>
     
        
</div>
        </div>
            
        </div>
    )
}

export default Income
