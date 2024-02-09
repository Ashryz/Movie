
const INITIAL_VALUE ={
    theme:'light'
}


 function themeReducer (state = INITIAL_VALUE , action){
    switch (action.type){
        case 'CHANGE_MODE':
            return {
                ...state,
                theme:action.payload
            }
        default : 
            return state
    }
}
export default themeReducer;