import React from 'react'

import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const Bengal = () => {
	return (
		<div className="Bengal" id="3">
			<p className="heading">Бенгальская</p>
			<Carousel opts={{ loop: true, slidesToScroll: 1 }} className="w-1/2 mx-auto my-10">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem className="basis-1/4 h-52 lg:basis-1/3" key={index}>
							<div className="w-full h-full relative">
								<Image fill src={`/image 3${index + 1}.png`} alt={`Image ${index + 1}`} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-0" />
				<CarouselNext className="right-0" />
			</Carousel>
			<div className="text">
				<p>
					Внешность этой породы напоминает о леопардах или оцелотах — диких кошачьих, обитающих на
					американском континенте. Это действительно прямые потомки азиатских леопардовых кошек,
					скрещенных с домашними кошками. Однако от дикого потомка сохранился по большей части только
					экзотический вид. По характеру это очень ласковые питомцы.
				</p>
				<img className="lapka" src="lapka3.png" alt="" />
				<p className="heading">Уход за кошкой</p>
				<p>
					Поскольку шерсть бенгала очень короткая, достаточно расчесывать ее раз в неделю, чтобы удалить
					слабые и отмершие волоски. <br />
					Еженедельно проверяйте уши питомца. При обнаружении скоплений грязи, аккуратно протрите
					наружную часть ушной раковины ватным тампоном или мягкой тканью, смоченной специальным лосьоном
					для животных. Не применяйте ватные палочки: они могут повредить внутреннюю часть уха. <br />
					Бенгалам нужна основательная физическая и умственная нагрузка, чтобы поддерживать в тонусе и
					тело, и их довольно высокий интеллект. Скука — основная причина нежелательного поведения.
					Игрушек должно быть много и разных, менять их надо каждые несколько недель, если привычное
					питомцу надоедает. <br />
					Бенгальские кошки плохо переносят одиночество: если вы подолгу работаете, подумайте о том,
					чтобы завести второго питомца, чтобы у бенгала был товарищ.
				</p>
				<ul>
					<li>Очень активная и игривая</li>
					<li>Общительная и любознательная</li>
					<li>Средний уровень шума</li>
					<li>Экзотическая и дикая красота</li>
					<li>Требует умеренного ухода за шерстью</li>
					<li>Негипоаллергенная порода</li>
					<li>Любит лазать и исследовать</li>
					<li>Хорошо уживается с детьми и другими животными</li>
				</ul>
				<img className="kitty2" src="kitty4.png" alt="" />
			</div>
		</div>
	)
}

export default Bengal
