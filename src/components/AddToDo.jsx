import React, { useState } from 'react'

import { Container, FormControl, TextField, Button } from '@mui/material';

const AddToDo = ({ addNew }) => {
    const [add, setAdd] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        addNew(add);
        setAdd("");
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <TextField
                        label="Add your to do here"
                        variant="outlined"
                        required
                        value={add}
                        onChange={(event) => setAdd(event.target.value)}
                    />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'black', color: 'white', marginTop: 7 }}
                        type='submit'
                    >
                        Add
                    </Button>

                </FormControl>
            </form>

        </Container>
    )
}

export default AddToDo