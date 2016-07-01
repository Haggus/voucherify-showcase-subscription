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
                <h2>{this.props.data.name}</h2>
                <img className="img-responsive" src={this.props.data.img} />
                <p>{this.props.data.desc}</p>
                <p>
                    <Link to={this.props.data.link} className="btn btn-primary">Order</Link>
                </p>
            </div>
        );
    }
}

class StoreList extends React.Component {
    render() {
        let items = [
            {
                name: 'A box of strawberries',
                img: 'img/strawberries.jpg',
                desc: 'A tasty box of strawberries, straight from sunny California!',
                link: '/order/1'
            },
            {
                name: 'A box of grapes',
                img: 'img/grapes.jpg',
                desc: 'A tasty box of grapes, straight from sunny California!',
                link: '/order/2'
            },
            {
                name: 'A box of raspberries',
                img: 'img/raspberries.jpg',
                desc: 'A tasty box of raspberries, straight from sunny California!',
                link: '/order/3'
            }
        ];

        return(
            <div className="row">
                {items.map(function(item) {
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
    render() {
        return(
            <div className="container">
                <h3>Here is your order</h3>
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
