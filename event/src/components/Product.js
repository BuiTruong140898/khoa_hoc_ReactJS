import React, { Component } from 'react';

class Product extends Component {
	constructor(props) {
		super(props);
		//this.onAddToCart = this.onAddToCart.bind(this);
	}
	onAddToCart(){
		alert(this.props.name);
	}
	onAddToCart2 = ()=>{
		alert(this.props.name);
	}

	render() {
		return(
			<div className='row'>
				<h3>product</h3>
				<div className="col-xs-6 col-sm-3 col-md-6 col-lg-6">
					<a className="thumbnail">
						<img data-src="#" alt=""/>
					</a>
					<h4>{this.props.name}</h4>
					<h4>{this.props.price}</h4>
					<button type="button" class="btn btn-default" onClick={ this.onAddToCart2 } >Buy</button>
					
				</div>
			</div>
		);
	}
}

export default Product;