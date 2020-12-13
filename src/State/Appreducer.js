export default (state,action)=>{
    switch(action.type){

        case 'DELETE' :
            return{
                ...state,transaction:state.transaction.filter(transaction=>transaction.id!==action.id)
            }
            case 'ADD':
            return{
                ...state,transaction:[action.payload,...state.transaction]
            }
        default:
            return state
    }
}