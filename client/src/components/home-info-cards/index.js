import React from "react";
import './style.css';

export default function HomeInfoCards() {
	return (
		
			<div className="container info-container" id="home-info-cards">
				{/* First row of info cards */}
				<div className="row info-row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
					<div className="col info-section">
						<img
							src="https://www.jessicagavin.com/wp-content/uploads/2018/06/ribeye-steak-with-red-wine-sauce-3-1200.jpg"
							className="img-fluid info-img"						
						/>
					</div>
					<div className="col info-section">
						<h2 className="info-text right quanlity">Quality Ingredients</h2>
					</div>

					<div className="col info-section">
						<img
							src="https://bakingmischief.com/wp-content/uploads/2021/02/banana-pudding-image-square.jpg"
							className="img-fluid info-img"
						/>
					</div>
					<div className="col info-section">
						<h2 className="info-text right customizable">Customizable</h2>
					</div>
				</div>
				{/* Second Row of Info Cards */}
				<div className="row info-row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
					<div className="col info-section">
						<h2 className="info-text left southern">Southern Style</h2>
					</div>
					<div className="col info-section">
						<img
							src="https://basilandbubbly.com/wp-content/uploads/2020/03/salmon-croquettes-9.jpg"
							className="img-fluid info-img"
						/>
					</div>
					<div className="col info-section">
						<h2 className="info-text left convenient">Convenient</h2>
					</div>
					<div className="col info-section">
						<img
							src="https://thecozycook.com/wp-content/uploads/2020/10/Buttermilk-Biscuits-f.jpg"
							className="img-fluid info-img"
						/>
					</div>
				</div>
			</div>
		
	);
}
