

export const addFavorite = (favorite) =>{
    return {
        type:'ADD_TO_FAVORITE',
        payload:favorite
    }
};
export const removeFavorite = (favorite) =>{
    return {
        type:'REMOVE_FAVORITE',
        payload:favorite
    }
};

