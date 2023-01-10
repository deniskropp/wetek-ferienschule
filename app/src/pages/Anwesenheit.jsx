import { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'

import QrReader from 'react-qr-scanner'

import { TeilnehmerView } from '../components/TeilnehmerView'
import { AnwesenheitListView } from '../components/AnwesenheitListView'

import { useMe } from '../Me.jsx'


class QrView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			delay: 100,
			result: 'No result',
		}

		this.handleScan = this.handleScan.bind(this)

		this.onResult = props.onResult
	}
	handleScan(data) {
		this.setState({
			result: data,
		})
		if (data)
			this.onResult(data)
//		else
//			this.onResult({text: '2023-01-08'})
	}
	handleError(err) {
		console.error(err)
	}
	render() {
		const previewStyle = {
			height: 240,
			width: 320,
		}

		return (
			<div>
				<QrReader
					delay={this.state.delay}
					style={previewStyle}
					onError={this.handleError}
					onScan={this.handleScan}
				/>
				<p>{this.state.result && this.state.result.text}</p>
			</div>
		)
	}
}

function QrDialog({ open, onExit, onResult }) {
	return (
		<Dialog onClose={onExit} open={open}>
			<DialogTitle>QR-Code scannen</DialogTitle>
			<DialogActions>
				<Stack>
					{open && <QrView onResult={onResult} facingMode="environment" />}
					<Button autoFocus onClick={onExit}>Abbrechen</Button>
				</Stack>
			</DialogActions>
		</Dialog>
	);
}

export function Anwesenheit() {
	const me = useMe()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const [message, setMessage] = useState('x')

	const handleQR = () => {
		console.log('handleQR')
		setOpen(true)
	}

	const handleExit = (value) => {
		console.log('handleExit', value)
		setOpen(false)
	}

	const handleResult = (data) => {
		console.log('handleResult', data)
		setOpen(false)

		async function post(data) {
			setMessage(data.text)

			const response = await me.makeRequest('User', { target: 'Anwesenheit.post', data: { Datum: data.text } })

			if (response.success())
				navigate(0)
		}
		
		post(data)
	}

	return (
		<Stack sx={{ padding: 0 }}>
			<QrDialog
				open={open}
				onResult={handleResult}
				onExit={handleExit}
			/>
			<TeilnehmerView />
			<Button variant="contained" onClick={handleQR}>QR-Code scannen</Button>
			{message}
			<AnwesenheitListView />
		</Stack>
	)
}