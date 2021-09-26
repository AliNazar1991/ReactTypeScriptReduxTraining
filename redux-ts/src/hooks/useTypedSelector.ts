import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

/**
 * This ugly piece of statement will tell typescript what type our state object is
 * we will use useTypeSelector instead of useSelector in our components to access the state object. -.-'
 * 
 * */ 
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; 
