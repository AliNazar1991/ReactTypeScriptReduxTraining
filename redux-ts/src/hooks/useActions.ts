import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creators/repositoryActionCreator";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch); // from this we get back something like: {searchRepositories: dispatch(searchRepositories), secondAction: dispatch(doSecondaction)} etc
};
