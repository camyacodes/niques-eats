import React from "react";
import './style.css'

const SocialButtons = () => {
	return (
		//  this is where Mya will add Social buttons sticky on left side of landing page
		<div className="social-buttons">
			<nav>
				<ul>
					<li>
						<a href="https://www.facebook.com/" target="_blank">
							<i className="fa fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i className="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.tiktok.com/" target="_blank">
            <svg id="tiktok-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SocialButtons;
