import React, { useState, useEffect } from 'react';
import CorSemaforo from './CorSemaforo'
import Timer from './Timer'
import './css/index.css'

export default props => {

	const [segundos, setSegundos] = useState(props.TempoVermelho);
	const [cores, setCores] = useState({
		vermelho: '#e91916',
		verde: '',
		amarelo: ''
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(segundos - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [segundos]);

	if (segundos === 0){
		if (cores.vermelho === '#e91916') {
			setCores({
				...cores,
				verde: '#50c55e',
				vermelho: ''
			})
			setSegundos(props.TempoVerde)
		} else if (cores.verde === '#50c55e') {
			setCores({
				...cores,
				amarelo: '#f7d455',
				verde: ''
			})
			setSegundos(props.TempoAmarelo)
		} else if (cores.amarelo === '#f7d455') {
			setCores({
				...cores,
				vermelho: '#e91916',
				amarelo: ''
			})
			setSegundos(props.TempoVermelho)
		}
	}

	return (
		<center>
			<div className="semafaro">
				<CorSemaforo cor={cores.vermelho} />
				<CorSemaforo cor={cores.amarelo} />
				<CorSemaforo cor={cores.verde} />
				<Timer timer={segundos} />
			</div>
		</center>
	)
}
