import React from "react";
import ListItem from "../components/ListItem";
import { useSelector } from 'react-redux';

export default function Homepage() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div>
      <div> Current Community :
        <select>
          <option>Canada</option>
          <option>USA</option>
          <option>Brazil</option>
        </select>
      </div>
      {userInfo ? (
        <div>{userInfo.admin? "true" : "flase"}</div>
        // <div>{userInfo.username}</div>
      ) : (null)
      }

      <ListItem mainCategory="products" />
      <ListItem mainCategory="services" />
      <ListItem mainCategory="expertises" />
    </div>
  );
}
