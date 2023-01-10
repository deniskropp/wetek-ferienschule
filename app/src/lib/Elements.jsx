import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

export function TextElement(field, item, handleChange) {
    return (
        <TextField
            variant="standard"
            name={field.name}
            value={item[field.name] || ''}
            onChange={handleChange}
        />
    )
}

export function SelectElement(field, item, handleChange) {
    return (
        <Select
            name={field.name}
            labelId={field.name}
            id={field.name}
            value={item[field.name] || ''}
            label={field.name}
            onChange={handleChange}
        >
            {field.choices.map((c, index) => {
                return <MenuItem key={index} value={c.id}>{c.Name}</MenuItem>
            })}
        </Select>
    )
}
