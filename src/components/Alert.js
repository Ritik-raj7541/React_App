import React from "react";

function capital(word){
  const lower = word.toLowerCase() ;
  return lower.charAt(0).toUpperCase() + lower.slice(1) ;
}

function Alert(props) {
  return (
      props.alert &&
    <>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
         <strong>{capital(props.alert.type)} </strong> : <strong> {props.alert.msg}</strong> 
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
        </button>
      </div>
    </>
  );
}

export default Alert;
