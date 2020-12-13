import React ,{useContext} from 'react'
import {GlobalContext} from '../State/InitialState'
function Balance() {
    let total=0
    const {transaction}= useContext(GlobalContext)

    const amounts = transaction.map(transaction=>transaction.amount)
    console.log(amounts)
    amounts.forEach(amount=> total+=amount)

    return (
        <div className="card-body">
            <h4 className="">Balance</h4>
            <h5>{total}$</h5>
        </div>
    )
}

export default Balance
