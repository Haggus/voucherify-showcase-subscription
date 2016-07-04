import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Link, Route} from 'react-router';

import StoreAPI from './api';

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-xs-4">
                <h2>{this.props.data.name}</h2>
                <img className="img-responsive" src={this.props.data.img} />
                <p>{this.props.data.desc}</p>
                <p>
                    <Link to={'/order/' + this.props.data.id} className="btn btn-primary">Order - {this.props.data.price}</Link>
                </p>
            </div>
        );
    }
}

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: StoreAPI.getStoreItems()
        };
    }

    render() {
        return(
            <div className="row">
                {this.state.items.map(function(item) {
                    return (
                        <StoreItem data={item} />
                    );
                })}
            </div>
        );
    }
}

class Store extends React.Component {
    render() {
        return(
            <div className="container">
                <h3>Example Store</h3>
                <StoreList />
            </div>
        );
    }
}

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: StoreAPI.getStoreItem(this.props.params.itemId)
        };
    }

    render() {
        return(
            <div className="container">
                <h3>Here is your order</h3>
                <p>
                    {this.state.item.name}
                </p>
            </div>
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
