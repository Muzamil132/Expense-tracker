import React ,{createContext ,useReducer} from 'react'

import Appreducer from './Appreducer'
const initialState={
    transaction :[{
        id:2,
        text:'Salary',
        amount: 1000
    },
    {id:3,text:"Petrol",amount:-90}
          ]
}

export const GlobalContext =createContext(initialState)
export const GlobalProvider =({children})=>{
    const [state,dispatch] =useReducer(Appreducer,initialState)


    const deleteItem =(id)=>{
        dispatch({
            type:"DELETE",
            id
        })
    }
    const Add=(payload)=>{
        dispatch({
            type:'ADD',
            payload
        })
    }

    return(
        <GlobalContext.Provider  value={{
            transaction:state.transaction,
            deleteItem,
            Add

        }}>
            {children}
        </GlobalContext.Provider>
    )
}