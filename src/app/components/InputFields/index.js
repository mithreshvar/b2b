import { ExpandMore } from "@mui/icons-material";
import { MenuItem, TextField } from "@mui/material";

const CustomSelectField = ({...props}) => {
    return (
        <TextField
            id={`${props.label}-select`}
            select
            label={props.label}
            value={props.value}
            onChange={(event) => props.setValue(event.target.value)}
            InputProps={{sx: {fontSize: '14px', fontWeight: 'medium'}}}
            SelectProps={{
            IconComponent: () => (
                <ExpandMore sx={{ color: 'primary.main', mr: '15px' }} />
            ),
            MenuProps: {
                sx: {
                    // Add your custom styles for the menu here
                },
                PaperProps: {
                    sx: {
                        // Set the background color of the menu
                        backgroundColor: '#F8F8F8', // Change this to your desired background color
                        borderRadius: '15px',
                        boxShadow: '0px 8px 15px #00000026',
                    },
                },
                },
            }}
            sx={{ width: '380px' }}
        >
            {props.valueOptions.map((investor) => (
            <MenuItem key={investor} value={investor}>
                {investor}
            </MenuItem>
            ))}
        </TextField>
    );
}

export default CustomSelectField;