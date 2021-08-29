
import React from 'react';
const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                 <img style={styles.image} src={product.img}/>
                </div>

                <div className="right-block">
                <div style={ {fontSize: 25} }>{title}</div>
                <div style={ {color: '#777'} }>Rs {price}</div>
                <div style={ {color: '#777'} }>Qty {qty}</div>

                <div className="cart-item-actions">
                    {/* buttons*/}

                    <img style={ {marginTop:10,padding:2.5,height:20} } alt="increase" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/128/149/149705.png"
                     onClick={() => onIncreaseQuantity(product)}
                     />

                    <img style={ {marginTop:10,padding:2.5,height:20} } alt="decrease" 
                     className="action-icons"
                     src="https://image.flaticon.com/icons/png/128/56/56889.png"
                     onClick={() => onDecreaseQuantity(product)} />

                    <img style={ {marginTop:10,padding:2.5,height:20} } alt="delete" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/128/1345/1345874.png" 
                     onClick={() => onDeleteProduct(product.id)}
                     />

                </div>

             </div>

        </div>
        );
    }


const styles = {
    image: {
        height: 110,
    width: 110,
    borderRadius: 4,
   
    }
}

export default CartItem;