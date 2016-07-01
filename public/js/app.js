import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Link, Route} from 'react-router';

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-xs-4">
                <h2>This is a store item</h2>
                <img src="/" />
                <p>
                    This is an item description.
                    This is an item description.
                    This is an item description.
                </p>
                <p>
                    <Link to={this.props.orderLink} className="btn btn-primary">Order</Link>
                </p>
            </div>
        );
    }
}

class StoreList extends React.Component {
    render() {
        return(
            <div className="row">
                <StoreItem orderLink="/order/1" />
                <StoreItem orderLink="/order/2" />
                <StoreItem orderLink="/order/3" />
            </div>
        );
    }
}

class Store extends React.Component {
    render() {
        return(
            <div className="container">
                <h3>Store</h3>
                <StoreList />
            </div>
        );
    }
}

class Order extends React.Component {
    render() {
        return(
            <h2>Here is your order</h2>
        );
    }
};

ReactDOM.render(
    <Router>
        <Route path="/" component={Store} />
        <Route path="/order/:itemId" component={Order} />
        <Route path="*" component={Store} />
    </Router>,
    document.getElementById('app')
);
