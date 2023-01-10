import { useState } from 'react'
import dayjs from 'dayjs'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import QRCode from 'react-qr-code'


export function QR() {
    const [value, setValue] = useState(dayjs('2023-01-01'))

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={{ padding: 3, alignItems: 'center' }} spacing={5}>
                <MobileDatePicker
                    label="Bitte das Datum einstellen"
                    inputFormat="YYYY-MM-DD"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <QRCode
                    size={256}
                    style={{ height: "600", maxWidth: "100%", width: "50%" }}
                    value={value.toISOString()}
                    viewBox={`0 0 256 256`}
                />
            </Stack>
        </LocalizationProvider>
    )
}
