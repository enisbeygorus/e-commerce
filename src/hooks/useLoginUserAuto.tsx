import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../store/actionSelectors";
import { setUser } from "../store/reducers/user";
import { getLocal, LOCAL_STORAGE_SELECTORS } from "../utils/localStorage";

function useLoginUserAuto() {
  const { user } = useSelector(ACTION_SELECTORS.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const localUser = getLocal(LOCAL_STORAGE_SELECTORS.user);
      if (localUser) {
        dispatch(setUser(localUser));
      }
    }
  }, [user]);

  return null;
}

export default useLoginUserAuto;
