import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label >First name:</label>
        </div>
        <input className="Name" type="text" />
        <div>
          {" "}
          <label for="last">Email</label>
        </div>
        <input className="Name" type="text" />
        <div >
        <div>
          {" "}
          <label>Phone Number</label>
        </div>
        <input className="cmon" type="text" />
        <div>
          {" "}
          <label>App/Web Link(Optional)</label>
        </div>
        <input  className="cmon" type="text" />
        <div>
          {" "}
          <label>Monthly Revenue (USD)</label>
        </div>
        <input type="text"  className="cmon"/>
        <div>
          <button className="button">Get Started</button>
        </div>
   
       <div className="linktext"> By signing up, you agree to our <a className="link" href="">Terms</a> and <a className="link"  href="">Privacy Policy</a></div>
        
        </div>
      </form>
    </div>
  );
};

export default Form;
