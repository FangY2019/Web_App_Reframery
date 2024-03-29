import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function Register() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [communityID, setCommunityID] = useState('5fe76baab69d0843c44af87e');
    const [confirmPassword, setConfirmPassword] = useState('');
    const redirect = '/home';
    const userRegister = useSelector(state => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are different')
        } else {
            dispatch(register(username, email, password, communityID));
        }
    };

    useEffect(() => {
        // if the user sign in sucessfully, go to the redirect link
        if (userInfo) {
            // props.history.push(redirect);
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);
    return (
        <div className="register-container">
            <div>
                <Link to="/home"><span>back to home</span></Link>
            </div>
            <div className="form">
                <form className="Register" onSubmit={submitHandler}>
                    <div>
                        <h3>Create New Account</h3>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div>
                        <label >User Name </label>
                        <input type="text" id="name" required onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Email Address </label>
                        <input type="email" id="email" required onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Password </label>
                        <input type="password" id="password" required onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Comfirm Password </label>
                        <input type="password" id="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Community  </label>
                        <select value={communityID} className="select-box" onChange={e => setCommunityID(e.target.value)}>
                            <option key="Canada" value="5fe76baab69d0843c44af87e">Canada</option>
                            <option key="USA" value="5fe76baab69d0843c44af87f">USA</option>
                            <option key="Brazil" value="5fe76baab69d0843c44af880">Brazil</option>
                        </select>
                    </div>
                    <li className="checkbox"><input type="checkbox" />Register as an administrator</li>
                    <div className="message">Already have account?
                    <Link to="/signin" className="linkto">&nbsp;Login</Link>
                    </div>
                    <div>
                        <input type="submit" className="submit"></input>
                    </div>

                    <div>By continuing, you agree to Reframery's <Link to="/term_of_service">Term of Service</Link> and <Link to="/privacy_policy">Privacy Policy</Link>.</div>
                </form>

            </div>
            <div className="register-description">
                <p>Your request for registration will be submittd to an admin. Once approved, you will receive an inital RCC $ 25 </p>
            </div>
        </div>


    );
}