import React from 'react'

import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const British = () => {
	return (
		<div className="British" id="2">
			<p className="heading">Британская</p>
			<Carousel
				opts={{ loop: true, slidesToScroll: 1 }}
				orientation="horizontal"
				className="w-1/2 mx-auto my-10"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => {
						const n = 37 + index
						return (
							<CarouselItem className="basis-1/4 h-52 lg:basis-1/3" key={index}>
								<div className="w-full h-full relative">
									<Image fill src={`/image ${n}.png`} alt={`Image ${n}`} />
								</div>
							</CarouselItem>
						)
					})}
				</CarouselContent>
				<CarouselPrevious className="left-0" />
				<CarouselNext className="right-0" />
			</Carousel>
			<div className="text">
				<p>
					Про британских котов говорят: вряд ли найдутся колени, на которых им не понравилось бы сидеть.
					Правда, есть условие: желание расположиться на коленях должен изъявить сам питомец. Еще
					утверждают, что на квадратный сантиметр тела у британской короткошерстной больше волосков, чем
					у любой другой породы. Благодаря этому качеству кот британец может соперничать с грелкой или
					теплым пледом.
				</p>
				<img className="lapka" src="lapka2.png" alt="" />
				<p className="heading">Уход за кошкой</p>
				<p>
					Короткая шерсть «британца» не требует сложного ухода, но расчесывать ее 1–2 раза в неделю
					необходимо, чтобы в подшерстке не образовывались комочки. В сезон линьки (весной и осенью)
					делайте это чаще. Если нужно помыть питомца, используйте только специальные средства для кошек
					из зоомагазина. По мере отрастания подстригайте когти. <br />
					Раз в неделю осматривайте уши питомца. Если в ушном канале скопились выделения, обратитесь к
					ветеринарному врачу.
					<br />
					Позаботьтесь о гигиене ротовой полости питомца. Если не очищать зубы от налета, он
					преобразуется в зубной камень, а это может привести к стоматологическим проблемам. Питомца
					следует приучать к регулярной чистке зубов, когда он еще котенок. Использовать нужно
					специальные средства для кошек.
				</p>
				<ul>
					<li>Спокойная и уравновешенная</li>
					<li>Независимая, но привязанная к хозяину</li>
					<li>Тихая</li>
					<li>Крепкая и массивная порода</li>
					<li>Требует ухода за шерстью раз в неделю</li>
					<li>Негипоаллергенная порода</li>
					<li>Предпочитает домашний образ жизни</li>
					<li>Хорошо уживается с детьми, терпилива и ласкова</li>
				</ul>
				<img className="kitty2" src="kitty3.png" alt="" />
			</div>
		</div>
	)
}

export default British
