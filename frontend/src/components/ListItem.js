import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Rating from "./Rating";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useSelector, useDispatch } from 'react-redux';
import { listItems } from "../actions/itemActions";


export default function ListItem({ mainCategory }) {
  const loweredCate = mainCategory.toLowerCase();
  const dispatch = useDispatch();

  const itemList = useSelector((state) => state.itemList);
  const { loading, error, items } = itemList;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  // console.log(products);

  //send the request to the backend
  useEffect(() => {
    dispatch(listItems());

  }, [dispatch]);

  let navigate = useNavigate();
  // const { data } = useData();

  // the category of the item

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div className="itemlist-container">
              <div className="home-category">
                {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
              </div>
              <div className="list-items">
                {items[loweredCate].map((item) => (
                  <div className="item">
                    <div className="image">
                      {userInfo ? (<Link to={(loweredCate === "products") ? "/product/" + item._id :
                        (loweredCate === "services") ? "/service/" + item._id :
                          "/expertise/" + item._id}>
                        <img
                          className="item-image"
                          src={item.image}
                          alt={item.name}
                        ></img>
                      </Link>) : (<Link to="/signin">
                        <img
                          className="item-image"
                          src={item.image}
                          alt={item.name}
                        ></img>
                      </Link>)}
                    </div>
                    <div className="item-info">
                      <div className="item-name">
                        {userInfo ? (<Link to={(loweredCate === "products") ? "/product/" + item._id :
                          (loweredCate === "services") ? "/service/" + item._id :
                            "/expertise/" + item._id}>
                          <span className="link">{item.name}</span>
                        </Link>) : (<Link to="/signin">
                          <span className="link">{item.name}</span>
                        </Link>)}
                      </div>
                      <div className="item-price">${item.price}</div>
                      <div className="item-rating"><Rating rating={5} numOfReviews={1}></Rating></div>
                      <div className="item-city">Hamilton, ON</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )
      }
    </div>
  );
}
