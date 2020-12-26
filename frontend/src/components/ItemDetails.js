import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import Rating from '../components/Rating';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { detailsItem } from '../actions/itemActions'


export default function ItemDetails(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();
    // const productId = props.match.params.id;
    // const category = props.category;
    const [quantity, setQuantity] = useState(1);
   
    const itemDetails = useSelector(state => state.itemDetails);
    const { loading, error, item } = itemDetails;

    //send the request to the backend
    useEffect(() => {
        dispatch(detailsItem(id));

    }, [dispatch, id]);


    const addToCartHandler = () =>{
        props.history.push(`/cart/${id}?quantity=${quantity}`);
    }

    return (
        <div className="item-page">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="details">
                            <div className="details-image">
                                <img src={item.image} alt="product"></img>
                            </div>

                            <div className="details-information">
                                <div>
                                    <ul>
                                        <li> <h4>{item.name}</h4> </li>
                                        <li > <Rating rating={item.rating} numOfReviews={item.numOfReviews}></Rating></li>
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
                                            <div>{item.stock > 0 ? (<span className="sucess">In Stock</span>) :
                                                (<span className="danger">Out of Stock</span>)}
                                            </div>
                                        </div>
                                    </li>
                                    {
                                        item.stock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div>Quantity</div>
                                                        <div>
                                                            <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                                                {[...Array(item.stock).keys()].map(
                                                                    (x) => <option key={x + 1} value= {x + 1}>{x + 1}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li >

                                                <li><button className="button-addToCart" onClick={addToCartHandler}>Add to Cart</button></li>
                                            </>

                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

