import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
export default function UserPage() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();
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
                  <input id="name" type="text" placeholder={user.username}></input>
                  <button className="primary" type="submit"> Edit</button>
                </div>
                <div>
                  <label >Email</label>
                  <input id="email" type="text" placeholder={user.email} readonly></input>
                  <> </>
                </div>
                <div>
                  <label>Password</label>
                  <input id="password" type="password" placeholder="******"></input>
                  <button className="primary" type="submit">Edit</button>                  
                </div>
                <div>
                  <label >Phone</label>
                  <input id="phone" type="text" placeholder={user.phoneNumber}></input>
                  {user.phoneNumber? (<button className="primary" type="submit">Edit</button>) :
                   (<button className="primary" type="submit">Add</button>)}
                </div>
                <div>
                  <label >Address</label>
                  <input id="address" type="text" placeholder={user.addressId}></input>
                  {user.addressId? (<button className="primary" type="submit">Edit</button>) :
                   (<button className="primary" type="submit">Add</button>)}
                </div>
                <div>
                  <label >First Name</label>
                  <input id="firstName" type="text" placeholder={user.firstName}></input>
                  {user.addressId? (<button className="primary" type="submit">Edit</button>) :
                   (<button className="primary" type="submit">Add</button>)}
                </div>
                <div>
                  <label >Last Name</label>
                  <input id="lastName" type="text" placeholder={user.lastName}></input>
                  {user.addressId? (<button className="primary" type="submit">Edit</button>) :
                   (<button className="primary" type="submit">Add</button>)}
                </div>
                <div>
                  <label >Birthday</label>
                  <input id="birthday" type="text" placeholder="yyyy-mm-dd"></input>
                  {user.addressId? (<button className="primary" type="submit">Edit</button>) :
                   (<button className="primary" type="submit">Add</button>)}
                </div>
                <div>
                  <label >Register Time</label>
                  <input id="registerTime" placeholder={user.registerTime} readonly></input>
                  <button className="primary" type="submit" >Unsubscribe</button>
                </div>
                


              </div>
            )}
      </form>
    </div>
  );
}
