import { Component, useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'

import QrReader from 'react-qr-scanner'

import { TeilnehmerView } from '../components/TeilnehmerView'
import { AnwesenheitListView } from '../components/AnwesenheitListView'


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
		this.onResult(data)
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
				<p>{this.state.result}</p>
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
					<QrView onResult={onResult} />
					<Button autoFocus onClick={onExit}>Abbrechen</Button>
				</Stack>
			</DialogActions>
		</Dialog>
	);
}

export function Anwesenheit() {
	const [open, setOpen] = useState(false)

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
	}

	return (
		<Stack sx={{ padding: 1 }}>
			<QrDialog
				open={open}
				onResult={handleResult}
				onExit={handleExit}
			/>
			<TeilnehmerView />
			<Button variant="contained" onClick={handleQR}>QR-Code scannen</Button>
			<AnwesenheitListView />
		</Stack>
	)
}