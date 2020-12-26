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
            <div>
              <p className="home-category">
                {loweredCate.charAt(0).toUpperCase() + loweredCate.slice(1)}
              </p>
              
              <ul className="items">
                {items[loweredCate].map((item) => (
                  <li key={item._id}>
                    <div className="item">

                      <img
                        className="item-image"
                        src={item.image}
                        onClick={() => {
                          (loweredCate === "products") ? navigate(`/product/${item._id}`) :
                            (loweredCate === "services") ? navigate(`/service/${item._id}`) :
                              navigate(`/expertise/${item._id}`)
                        }}
                        alt={item.name}
                      ></img>

                      <div className="item-name">

                        <Link to={(loweredCate === "products") ? "/product/" + item._id :
                          (loweredCate === "services") ? "/service/" + item._id :
                            "/expertise/" + item._id}>
                          <span className="link">{item.name}</span>
                        </Link>

                        {/* <Link to={"/product/" + item._id}>
                  <span className="link">{item.name}</span>
                </Link> */}
                      </div>
                      <div className="item-price">${item.price}</div>
                      <div className="item-rating"><Rating rating={item.rating} numOfReviews={0}></Rating></div>
                      <div className="item-city">{item.city} </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}


    </div>
  );
}
