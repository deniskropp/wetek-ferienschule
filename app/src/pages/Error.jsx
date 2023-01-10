import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


export function Error() {
    const { message } = useParams()

    return (
        <Stack sx={{ margin: 1, padding: 1 }}>
            <Typography variant="body1" component="h4" color="error" gutterBottom>
                {message}
            </Typography>
        </Stack>
    )
}
