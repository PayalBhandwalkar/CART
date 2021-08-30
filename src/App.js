import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';






  class App extends React.Component {

    constructor () {
      super();
      this.state = {
        products: [
          {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            id: 2
          },
          {
            price: 999,
            title: 'Ear Pods',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1623788736363-55d36908ab21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGFpcnBvZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            id: 3
          }
        ],
        loading: true
      };
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      // this.testing();
    }

    /*componentDidMount() {
      firebase
        .firestore()
        .collection("products")
        .get()
        .then(snapshot => {
          const products = snapshot.docs.map(doc => {
            const data = doc.data();
            data["id"] = doc.id;
            return data;
          });
          this.setState({ products: products, loading: false });
        });
    }*/
  


    handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
  
      products[index].qty += 1;
  
      this.setState({
        products
      })
    }
    handleDecreaseQuantity = (product) => {
      console.log('Heyy please dec the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
  
      if (products[index].qty === 0) {
        return;
      }
  
      products[index].qty -= 1;
  
      this.setState({
        products
      })
    }
    handleDeleteProduct = (id) => {
      const { products } = this.state;
  
      const items = products.filter((item) => item.id !== id); // [{}]
  
      this.setState({
        products: items
      })
    }
  
    getCartCount = () => {
      const { products } = this.state;
  
      let count = 0;
  
      products.forEach((product) => {
        count += product.qty;
      })
  
      return count;
    }
  
    getCartTotal = () => {
      const { products } = this.state;
  
      let cartTotal = 0;
  
      products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price
      });
  
      return cartTotal;
    }
    render () {
      const { products } = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
        </div>
      );
    }
  }


export default App;
