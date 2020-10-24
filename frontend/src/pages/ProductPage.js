import React from 'react';
import data from '../data/data'


function ProductPage(props) {
    const product = data.products.find(x => x._id === props.match.params.id)

    const handleAddToCart = () => {
        props.history.push("/cart")
    }
    const handleBuy = () => {
        props.history.push("/payment")
    }

    return (
        <div className="product-page">
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>

                <div className="details-information">
                    <div>
                        <ul>
                            <li> <h4>{product.name}</h4> </li>
                            <li> Rating: {product.rating} Stars</li>
                            <li> Price: ${product.price}</li>
                            <li> Address: <span>{product.address}</span></li>
                            <li className="details-description">Description: <p className="details-description-content">{product.description}</p></li>
                        </ul>
                    </div>
                </div>

                <div className="details-action">
                    <ul>
                        <li className="price">RCC$: {product.price}</li>
                        {/* if the stock is greater than 0 , show instock, else,  */}
                        <li>Status: {product.quantity > 0 ? "In Stock" : "Out of Stock"}</li>
                        <li>Quantity:
                    <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li >

                        <li><button className="button-addToCart" onClick={handleAddToCart}>Add to Cart</button></li>
                        <li><button className="button-buy" onClick={handleBuy.bind}>Buy Now</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default ProductPage;