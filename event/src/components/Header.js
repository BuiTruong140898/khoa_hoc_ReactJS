import React from 'react';
function Header(){

	return (
		<nav className="navbar navbar-default" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Title</a>
				</div>
		
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
					</ul>
					<form className="navbar-form navbar-left" role="search">
						<div className="form-group">
						</div>
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Link</a></li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
							<ul className="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
