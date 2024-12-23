import React from 'react'

const Cards = () => {
	return (
		<div className="page2">
			<p className="heading">Породы</p>
			<div className="ImgMen">
				<div className="image-container">
					<a href="#1">
						<img src="Men1.png" alt="Мейн-кун" className="hover-image first-image" />
						<img src="Men2.png" alt="Мейн-кун" className="hover-image second-image" />
					</a>
				</div>
			</div>
			<div className="ImgBen">
				<div className="image-container">
					<a href="#3">
						<img src="Ben1.png" alt="Мейн-кун" className="hover-image first-image" />
						<img src="Ben2.png" alt="Мейн-кун" className="hover-image second-image" />
					</a>
				</div>
			</div>
			<div className="ImgBrit">
				<div className="image-container">
					<a href="#2">
						<img src="Brit1.png" alt="Мейн-кун" className="hover-image first-image" />
						<img src="Brit2.png" alt="Мейн-кун" className="hover-image second-image" />
					</a>
				</div>
			</div>
			<div>
				<span className="Men">Мейн-кун</span>
				<span className="Ben">Бенгальская</span>
				<span className="Brit">Британская</span>
			</div>
			<div>
				<img src="1.png" className="img1" />
				<img src="2.png" className="img2" />
			</div>
		</div>
	)
}

export default Cards
