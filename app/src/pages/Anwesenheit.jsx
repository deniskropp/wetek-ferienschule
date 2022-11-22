import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import { AnwesenheitListView } from '../components/AnwesenheitListView'

import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)

    this.onResult = props.onResult
  }
  handleScan(data){
    this.setState({
      result: data,
    })
    this.onResult(data)
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
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

function SimpleDialog(props) {
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
                <Test onResult={onResult}/>
              <Button autoFocus onClick={handleCancel}>Abbrechen</Button>
            </Stack>
        </DialogActions>
      </Dialog>
    );
  }
  
export function Anwesenheit() {
    const [teilnehmer, setTeilnehmer] = useState(null)
    const [open, setOpen] = React.useState(false);
    const { token } = useParams()

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Authorize.php?key=${token}`)
        .then((data) => data.json())
        .then((json) => {
            console.log(json)
            setTeilnehmer(json[0])
        })
    }, [setTeilnehmer,token])

    if (!teilnehmer)
        return <div></div>


    const handleClickQR = () => {
        setOpen(true);
      };

    const handleClose = (value) => {
        setOpen(false);
    };

    const handleQR = (data) => {
        console.log(data)
        setOpen(false);
    };

    return (
        <Stack>
            <SimpleDialog
                open={open}
                onResult={handleQR}
                onClose={handleClose}
            />
            <Button variant="contained" onClick={handleClickQR}>QR-Code scannen</Button>
            <AnwesenheitListView id={teilnehmer.id} />
        </Stack>
    )
}
