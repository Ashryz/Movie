
const INITIAL_VALUE ={
    favorites:[],
}

 const favoriteReducer= ( state =INITIAL_VALUE ,action)=>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites,action.payload] 
            }
        case 'REMOVE_FAVORITE':
            return{
                ...state,
                favorites:state.favorites.filter((favorite) => favorite !== action.payload)
            }
        default :
            return state;

    }
};
export default favoriteReducer;


