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
                    <Link to={'/order/' + this.props.data.id} className="btn btn-primary">Order - {'$' + this.props.data.price}</Link>
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
            voucher: '',
            item: StoreAPI.getStoreItem(this.props.params.itemId)
        };
    }

    handleChange(event) {
        this.setState({
            voucher: event.target.value
        });
    }

    checkVoucherCode(event) {
        console.log(this.state.voucher);
    }

    render() {
        return(
            <div className="container">
                <h3>Example Store</h3>
                <div className="panel panel-default">
                    <div className="panel-heading">Your order</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-4">
                                <img className="img-responsive" src={this.state.item.img} />
                            </div>
                            <div className="col-xs-8">
                                <h4>{this.state.item.name}</h4>
                                <h5>{this.state.item.desc}</h5>
                                <h2>{'$' + this.state.item.price}</h2>
                                <hr />
                                <h5>Do you have a voucher?</h5>
                                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.voucher} placeholder="Voucher code"/>
                                <input type="button" className="btn btn-primary" onClick={this.checkVoucherCode.bind(this)} value="Use Voucher"/>
                            </div>
                        </div>
                    </div>
                </div>
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
