import React, { useState, useEffect } from 'react';
import CorSemaforo from './CorSemaforo'
import Timer from './Timer'
import './css/index.css'

export default props => {

	const [segundos, setSegundos] = useState(props.TempoVermelho);
	const [vermelho, setVermelho] = useState('#e91916')
	const [verde, setVerde] = useState()
	const [amarelo, setAmarelo] = useState()

	const styles = {
		vermelho: {
			background: vermelho
		},
		amarelo: {
			background: amarelo
		},
		verde: {
			background: verde
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(segundos => segundos -= 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [segundos]);

	if (vermelho === '#e91916' && segundos === -1) {
		setVerde(verde => verde = '#50c55e')
		setVermelho()
		setSegundos(segundos => segundos = props.TempoVerde)
	} else if (verde === '#50c55e' && segundos === -1) {
		setAmarelo(amarelo => amarelo = '#f7d455')
		setVerde()
		setSegundos(segundos => segundos = props.TempoAmarelo)
	} else if (amarelo === '#f7d455' && segundos === -1) {
		setVermelho(vermelho => vermelho = '#e91916')
		setAmarelo()
		setSegundos(segundos => segundos = props.TempoVermelho)
	}

	return (
		<center>
			<div className="semafaro">
				<CorSemaforo cor={styles.vermelho} />
				<CorSemaforo cor={styles.amarelo} />
				<CorSemaforo cor={styles.verde} />
				<Timer timer={segundos} />
			</div>
		</center>
	)
}
