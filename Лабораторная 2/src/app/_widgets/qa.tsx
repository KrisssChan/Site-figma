import React from 'react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

const Qa = () => {
	return (
		<div className="page3">
			<div className="hd">
				<p className="heading">Часто задаваемые вопросы</p>
				<img className="dada" src="image 59.png" alt="" width="100px" height="100px" />
			</div>
			<Accordion type="multiple" className="w-1/2 py-4">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<span>Какую породу кошки выбрать для семьи с детьми?</span>
					</AccordionTrigger>
					<AccordionContent>
						<p>
							Для семьи с детьми подойдут породы, известные своими дружелюбным и терпеливым характером.
							Среди таких пород можно выделить мейн-куна, британскую короткошерствную и сфинкса. Эти кошки
							обычно хорошо уживаются с детьми и терпимо относятся к их активности.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<span>Как помочь кошке адаптироваться в новом доме? </span>
					</AccordionTrigger>
					<AccordionContent>
						<p>
							При переезде в новый дом важно предоставить кошке безопасное и спокойное место, где она
							сможет привыкнуть к новому окружению. Постепенно знакомьте её с остальными комнатами и
							членами семьи. Обеспечьте доступ к её любимым игрушкам, еде и воде. Терпение и внимание
							помогут кошке быстрее адаптироваться.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						<span>Как часто нужно водить кошку к ветеринару?</span>
					</AccordionTrigger>
					<AccordionContent>
						<p>
							Взрослых кошек рекомендуется показывать ветеринару раз в год для общего осмотра и вакцинации.
							Котят нужно водить к ветеринару чаще, особенно в первые месяцы жизни, для получения всех
							необходимых прививок и проверки на наличие паразитов. Пожилых кошек стоит показывать
							ветеринару каждые шесть месяцев.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default Qa
