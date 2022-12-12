import React from 'react'
import { Component, useState, useEffect } from 'react'

import { useMe } from '../Me'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'

import QrReader from 'react-qr-scanner'

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

function QrDialog(props) {
	const { onClose, onResult, open } = props;

	const handleClose = () => {
		onClose();
	};

	const handleCancel = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>QR-Code scannen</DialogTitle>
			<DialogActions>
				<Stack>
					<QrView onResult={onResult} />
					<Button autoFocus onClick={handleCancel}>Abbrechen</Button>
				</Stack>
			</DialogActions>
		</Dialog>
	);
}

export function Anwesenheit() {
	const me = useMe()
	const [teilnehmer, setTeilnehmer] = useState(null)
	const [open, setOpen] = React.useState(false)


	useEffect(() => {
		async function loadMe() {
			const res = await me.postUser('Teilnehmer.get', {})

			console.log(res)

			setTeilnehmer(res.data)
		}

		loadMe()
	}, [me])

	if (!teilnehmer)
		return <Container>Lade...</Container>


	const handleClickQR = () => {
		setOpen(true)
	}

	const handleClose = (value) => {
		setOpen(false)
	}

	const handleQR = (data) => {
		setOpen(false)
	}

	return (
		<Container>
			<Stack>
				<div className="container">
					<table>
						<tr>
							<th>Name</th>
							<td>{teilnehmer.Name}</td>
						</tr>
						<tr>
							<th>Vorname</th>
							<td>{teilnehmer.Vorname}</td>
						</tr>
						<tr>
							<th>Klasse</th>
							<td>{teilnehmer.Klasse}</td>
						</tr>
					</table>
				</div>
				<QrDialog
					open={open}
					onResult={handleQR}
					onClose={handleClose}
				/>
				<Button variant="contained" onClick={handleClickQR}>QR-Code scannen</Button>
				{teilnehmer ? <AnwesenheitListView id={teilnehmer.id} /> : <div></div>}
			</Stack>
		</Container>
	)
}
