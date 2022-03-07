import { Avatar, Grid, Paper, TextField, Button } from '@material-ui/core';
import React from 'react';

const Login = () => {
    const paperStyle = { padding: 50, height: '80vh', width: 500, margin: '50px auto' }
    const gridStyle = { margin: '60px 0px auto' }
    const gridButtonStyle = { margin: '20px 0px auto' }
    const button1Style = { padding: '10px 80px' }
    const button2Style = { padding: '10px 70px' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar> ? </Avatar>
                    <h1> Questionable </h1>
                </Grid>
                <Grid style={gridStyle}>
                    <p> Username </p>
                    <TextField fullWidth required variant='outlined' size='small' margin='dense'></TextField>
                </Grid>
                <Grid style={gridStyle}>
                    <p> Password </p>
                    <TextField fullWidth required variant='outlined' type="password" size='small' margin='dense'></TextField>
                </Grid>
                <Grid align='center' style={gridStyle}>
                    <Button variant='contained' color='primary' style={button1Style}>
                        Login
                    </Button>
                </Grid>
                <Grid align='center' style={gridButtonStyle}>
                    <Button variant='outlined' style={button2Style}>
                        Sign Up
                    </Button>
                </Grid>
            </Paper >
        </Grid >
    );
}

export default Login;