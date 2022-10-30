import { useState } from "react";
import "./style.scss";
import productImage from "../assets/image-product-desktop.jpg";
import Cart from '../assets/icon-cart.svg'

function ProductCard() {
    return (
        <div className='card-container'>
            <img src={productImage} alt='' />
            <div className='right-aside'>
                <p className="product-category">perfume</p>
                <p className="product-name">Gabrielle Essence Eau De Parfume</p>
                <p className="product-description">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the
                    House of CHANEL.
                </p>
                <div className="price-section">
                  <p className="discount-price">$149.99</p>
                  <p className="initial-price">$169.99</p>
                </div>
                <div className="cart-button">
                  <img src={Cart} alt="" />
                  <p>Add to Cart</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
