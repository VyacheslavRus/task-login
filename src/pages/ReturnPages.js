import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/authActions";

const ReturnPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>returnXXX</h2>
      <button onClick={() => dispatch(logOut())}>Back</button>
    </>
  );
};

export default ReturnPage;
