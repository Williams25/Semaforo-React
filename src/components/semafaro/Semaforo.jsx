import React, { useState, useEffect } from 'react';
import CorSemaforo from './CorSemaforo'
import Timer from './Timer'
import './css/index.css'

export default props => {

	const [segundos, setSegundos] = useState(props.TempoVermelho);
	const [vermelho, setVermelho] = useState('#e91916')
	const [verde, setVerde] = useState()
	const [amarelo, setAmarelo] = useState()

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(segundos - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [segundos]);

	if (segundos === 0){
		if (vermelho === '#e91916') {
			setVerde('#50c55e')
			setVermelho()
			setSegundos(props.TempoVerde)
		} else if (verde === '#50c55e') {
			setAmarelo('#f7d455')
			setVerde()
			setSegundos(props.TempoAmarelo)
		} else if (amarelo === '#f7d455') {
			setVermelho('#e91916')
			setAmarelo()
			setSegundos(props.TempoVermelho)
		}
	}

	return (
		<center>
			<div className="semafaro">
				<CorSemaforo cor={vermelho} />
				<CorSemaforo cor={amarelo} />
				<CorSemaforo cor={verde} />
				<Timer timer={segundos} />
			</div>
		</center>
	)
}
