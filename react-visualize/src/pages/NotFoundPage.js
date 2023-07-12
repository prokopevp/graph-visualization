import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            <Paper style={{width: 'max-content', padding: '5vh', marginTop: '10vh'}}>
                <Typography fontSize={'10vh'}>404</Typography>
                <Typography fontSize={'4vh'}>Страница не найдена</Typography>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button 
                        variant='contained'
                        fullWidth
                        style={{margin: '2vh 0 1vh 0'}}
                    >
                        <ArrowBackIcon style={{height: '2.5vh'}} />
                        На главную
                    </Button>
                </Link>
            </Paper>
        </div>
    )
}