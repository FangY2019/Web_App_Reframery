import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";
import Rating from '../components/Rating';


export default function ItemDetails({category}) {
    let navigate = useNavigate();
    const { data } = useData();
    let { id } = useParams();
    let item = data[category].find(x => x._id === id);
    
    if(!item){
        return <div> Item Not Found</div>
    }
    return (
        <div className="item-page">
            <div className="details">
                <div className="details-image">
                    <img src={item.image} alt="product"></img>
                </div>

                <div className="details-information">
                    <div>
                        <ul>
                            <li> <h4>{item.name}</h4> </li>
                            <li > <Rating rating={item.rating} numOfReviews= {item.numOfReviews}></Rating></li>
                            <li> Price: ${item.price}</li>
                            <li> Address: <span>{item.address}</span></li>
                            <li className="details-description">Description: <p className="details-description-content">{item.description}</p></li>
                        </ul>
                    </div>
                </div>

                <div className="details-action">
                    <ul>
                        <li className="price">
                            <div className="row">
                            <div>Price</div>
                            <div>RCC$: {item.price}</div>
                            </div>
                        </li>
                        {/* if the stock is greater than 0 , show instock, else,  */}
                        <li>
                            <div className="row">
                            <div>Status</div>
                            <div>{item.stock > 0 ? (<span className="sucess">"In Stock"</span>) : 
                                                       (<span className="error">"Out of Stock"</span>)}
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                            <div>Quantity</div>
                            <div>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            </div>
                        </li >

                        <li><button className="button-addToCart" onClick={() => navigate(`/cart`)}>Add to Cart</button></li>
                        <li><button className="button-buy" onClick={() => navigate(`/payment`)}>Buy Now</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

