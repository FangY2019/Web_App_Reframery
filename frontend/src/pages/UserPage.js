import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router";
import { detailsUser, updateUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import { Link } from "react-router-dom";

export default function UserPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get sign in user token
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  // get sign in user detail informaton
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  // constant for update information
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [addressEdited, setAddressEdited] = useState(false);

  // function for updating user information
  const updateHandler = (e) => {
    e.preventDefault();
    setAddressEdited(true);
    dispatch(updateUser(userInfo._id,
      username === "" ? user.username : username,
      password === "" ? user.password : password,
      phoneNumber === "" ? user.phoneNumber : phoneNumber,
      address === "" ? user.address : address,
      firstName === "" ? user.firstName : firstName,
      lastName === "" ? user.lastName : lastName,
      birthday === "" ? user.birthday : birthday,

    ));
    window.location.reload();
  };



  useEffect(() => {
    dispatch(detailsUser(userInfo._id))
  }, [dispatch, userInfo._id]);

  return (
    <div className="profile-container">
      <form className="form-profile" >
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
              <div className="profile-row">
                <div>
                  <label>User Name</label>
                  <input id="name" type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}></input>
                  <button onClick={updateHandler}> Update</button>
                </div>
                <div>
                  <label >Email</label>
                  <input id="email" type="text" placeholder={user.email} readOnly></input>
                  <> </>
                </div>
                <div>
                  <label>Password</label>
                  <input id="password" type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
                  <button onClick={updateHandler}>Update</button>
                </div>
                <div>
                  <label >Phone</label>
                  <PhoneInput placeholder={user.phoneNumber} onChange={setPhoneNumber} />
                  {user.phoneNumber === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>

                {!addressEdited ?
                  (
                    <div>
                      <label >Address</label>
                      <input id="address" type="text" placeholder={user.address}></input>
                      {user.address === "" ? (<button onClick={setAddressEdited}>Add</button>) :
                        (<button onClick={setAddressEdited}>Update</button>)}
                    </div>
                  ) :
                  (
                    <div>
                      <div>
                        <label>Address</label>
                        <input type="text" placeholder={user.address} onChange={(e) => setAddress(e.target.value)} ></input>
                      </div>
                      <div>
                        <label>City</label>
                        <input type="text" ></input>
                      </div>
                      <div>
                        <label>Province</label>
                        <input type="text" ></input>
                      </div>
                      <div>
                        <label>Country</label>
                        <input type="text" ></input>
                      </div>
                      <div>
                        <label>Postcode</label>
                        <input type="text" ></input>

                      </div>
                      <button onClick={updateHandler}>Submit</button>
                    </div>
                  )
                }

                <div>
                  <label >First Name</label>
                  <input id="firstName" type="text" placeholder={user.firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                  {user.firstName === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Last Name</label>
                  <input id="lastName" type="text" placeholder={user.lastName} onChange={(e) => setLastName(e.target.value)}></input>
                  {user.lastName === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Birthday</label>
                  <input id="birthday" type="text" onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")} placeholder={user.birthday} onChange={(e) => setBirthday(e.target.value)}></input>
                  {user.birthday === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Register Time</label>
                  <input id="registerTime" placeholder={user.registerTime.slice(0, 10)} readOnly></input>
                  <button  >Unsubscribe</button>
                </div>



              </div>
            )}
      </form>
    </div>
  );
}
