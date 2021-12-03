import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/authActions";
import style from "../pages/ReturnPages.module.css";

const ReturnPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.container}>
        <button className={style.btn} onClick={() => dispatch(logOut())}>
          Back
        </button>
      </div>
    </>
  );
};

export default ReturnPage;
