import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import { useHistory } from "react-router";


export default function Signin(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();
  // console.log(props.history.state);

  // const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  const redirect = '/';  

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // navigate(`/`)
    // navigate(redirect)
  };

  useEffect(() => {
    // if the user sign in sucessfully, go to the redirect link
    if (userInfo) {
      // props.history.push(redirect);
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="form" >
      <form className="signin" onSubmit={submitHandler}>
          <div> 
            <h3 className="signin-text">Sign In</h3>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label >Email </label>
            <input type="email" id="email" required onChange={e => setEmail(e.target.value)} />
          </div>  
          <div>
            <label >Password </label>
            <input type="password" id="password" required onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="checkbox"><input type="checkbox" />Sign in as an administrator</div>
          {/* <li className="checkbox"><input id="checkid1" type="checkbox" /><label for="checkid1" >Keep me signed in</label></li> */}
          <div><input type="submit" className="submit"></input></div>
          <div className="message">Don't have account? <Link to="/register" className="linkto">&nbsp;Register</Link></div>
      </form>
    </div>
  );
}

