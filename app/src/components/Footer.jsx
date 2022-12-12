import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

export function Footer() {
    const theme = useTheme();

    return (
        <Stack direction="row">
            <div className="container">
                Copyright © 2022 WeTeK Berlin gGmbH
            </div>
            <div className="container">
                {theme.palette.mode}
            </div>
        </Stack>
    )
}
