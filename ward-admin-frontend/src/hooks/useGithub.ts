import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/github/actions";
import { useCallback } from "react";

const useGithub = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = useCallback((username: string) => dispatch(getUserProfileAsync.request(username)), [dispatch]);

  return {
    data,
    loading,
    error,
    onSubmitUsername,
  };
};

export default useGithub;


