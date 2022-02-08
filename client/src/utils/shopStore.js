import { createStore } from "redux";
import reducer from "./reducers";

export default function shopStore(){
    const store= createStore(reducer)
    return store
}