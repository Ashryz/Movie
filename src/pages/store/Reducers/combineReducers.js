import { combineReducers } from "redux";
import favoriteReducer from "./favReducer"
import themeReducer from "./themeReducer"
import langReducer from "./LangReducer";


export default  combineReducers({
    combinefavo: favoriteReducer,
    combinetheme: themeReducer,
    compineLang: langReducer,
    
})
    
