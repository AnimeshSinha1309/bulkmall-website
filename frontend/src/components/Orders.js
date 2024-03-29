import React from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from 'react-router';

class Orders extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.getItem('id') === null)
      this.props.history.push('/login');
    this.state = {
      products: [],
      orders: [],
    }
    const payload1 = "sellerId=" + localStorage.getItem('id');
    fetch('http://localhost:9001/product/seller', {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload1
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
    const payload2 = "userId=" + localStorage.getItem('id');
    fetch('http://localhost:9001/order/detail', {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload2
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ orders: data })
      })
  }

  clickHandlerDispatch(productId) {
    fetch('http://localhost:9001/product/edit/' + productId, {
      method: "PUT",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: "status=dispatched"
    })
    window.location.reload();
  }

  clickHandlerCancel(productId) {
    fetch('http://localhost:9001/product/edit/' + productId, {
      method: "PUT",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: "status=cancelled"
    })
    window.location.reload();
  }

  appendProducts() {
    let cards = []

    for (const product of this.state.products) {
      cards.push(
        <div className="col-sm-4" style={{ display: 'inline-block' }} key={product.id}>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                These are priced at Rs. {product.price} per item.&nbsp;
                {product.remaining} items are left in this bundle.&nbsp;
                {product.quantity} items were originally in this bundle.&nbsp;
                The status on this prodct is <b>{product.status}</b>.
              </Card.Text>
              <Button variant="primary"
                disabled={product.status !== "pending"}
                onClick={() => this.clickHandlerDispatch(product.id)}
                style={{ margin: '0.2rem' }}>
                Dispatch
              </Button>
              <Button variant="danger"
                disabled={product.status !== "selling" && product.status !== "pending"}
                onClick={() => this.clickHandlerCancel(product.id)}
                style={{ margin: '0.2rem' }}>
                Cancel
              </Button>
            </Card.Body>
          </Card>
        </div>
      )
    }
    return cards;
  }

  appendOrders() {
    let cards = []

    for (const order of this.state.orders) {
      cards.push(
        <div className="col-sm-4" style={{ display: 'inline-block' }} key={order.id}>
          <Card style={{ width: '18rem', margin: '2rem' }}>
            <Card.Body>
              <Card.Title>{order.productId.name}</Card.Title>
              <Card.Text>
                These are priced at Rs. {order.productId.price} per item.&nbsp;
                <b>{order.productId.remaining} items</b> are left in this bundle.&nbsp;
                The status on this prodct is <b>{order.productId.status}</b>. &nbsp;
                You have ordered <b>{order.quantity} items</b> from this bundle.
              </Card.Text>
              <Button href={"order/view/" + order.id} variant="success">Order Details</Button>
            </Card.Body>
          </Card>
        </div>
      )
    }
    return cards;
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{ margin: '2rem 2rem 0rem' }}>My Store</h2>
          {this.appendProducts()}
        </div>
        <div className="container">
          <h2 style={{ margin: '2rem 2rem 0rem' }}>My Orders</h2>
          {this.appendOrders()}
        </div>
      </div>
    );
  }
}

export default withRouter(Orders);
