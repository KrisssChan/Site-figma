import React from 'react'

import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const Maincun = () => {
	return (
		<div className="MainCun" id="1">
			<p className="heading">Мейн-кун</p>
			<Carousel
				opts={{ loop: true, slidesToScroll: 1 }}
				orientation="horizontal"
				className="w-1/2 mx-auto my-10"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => {
						const n = 42 + index
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
					Эта порода в какой-то период оказалась на грани исчезновения, а сейчас в некоторых странах
					входит в пятерку самых популярных. Рассказываем об умном и ласковом «гиганте» и о том, как
					ухаживать за мейн-куном.
				</p>
				<img className="lapka" src="lapka.png" alt="" />
				<p className="heading">Уход за кошкой</p>
				<p>
					У мейнских енотовых тяжелая шерсть, к тому же они довольно сильно линяют. Поэтому нужно
					вычесывать шубку не реже раза в неделю. Это необходимо не только «для красоты», но и для
					поддержания здоровья. Активно умываясь, кошка проглатывает слабые и мертвые волоски, они могут
					создавать проблему для ЖКТ, а регулярное вычесывание позволит предотвратить эту проблему.
					<br />
					Шерсть обычно гладкая, шелковая. Но когда начинает выглядеть засаленной или волокнистой,
					питомца пора купать. В среднем это требуется раз в месяц. <br />У мейн-кунов все большое, в том
					числе когти. Не всегда в домашних условиях они могут их эффективно сточить, поэтому стричь их
					необходимо примерно раз в месяц. Приучать к этому не очень приятному ритуалу стоит с детства.
					<br />
					Представители породы, как правило, сильные, здоровые животные. Это выражается и в
					продолжительности жизни. Но, как и у всех пород, у этих красавцев возможны определенные недуги.
				</p>
				<ul>
					<li>Крупная порода</li>
					<li>Дружелюбная и преданная</li>
					<li>Мягкий голос</li>
					<li>Величественная и мощная</li>
					<li>Требует ухода за шерстью несколько раз в неделю</li>
					<li>Негипоаллергенная порода</li>
					<li>Любит активные игры и прогулки</li>
					<li>Хорошо уживается с детьми и другими животными</li>
				</ul>
				<img className="kitty2" src="kitty2.png" alt="" />
			</div>
		</div>
	)
}

export default Maincun
