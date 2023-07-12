import { useEffect, useState } from "react"
import { apiAxios } from "../services/http"
import React from "react"
import { Button, CircularProgress, IconButton, Paper, Typography, useTheme } from "@mui/material"
import styled from "styled-components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toJS } from 'mobx';

const { useParams, Link } = require("react-router-dom")

export const DetailsPage = () => {
    const { id } = useParams()
    const [node, setNode] = useState()

    const theme = useTheme()

    useEffect(()=>{
        apiAxios.get(`animals/${id}`)
        .then((res)=>{
            setNode(res.data)
        })
    }, [id])

    const MainDesk = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        width: max-content;
        gap: 2vh;
        margin: 4vh;
    `

    const Relation = ({label='', relations, to=true}) => {
        return <Paper style={{padding: '5vh', width: '15vw', fontSize: '2.5vh'}}>
            <b>{label}</b> <br/>
            {relations.map((rel)=>
                <Link to={`/details/${rel.id}`} style={{textDecoration: 'none'}}>
                    <Button style={{textTransform: 'none', color: 'black', fontSize: '2vh'}}>
                        {!to ? <ArrowBackIcon style={{height: '2.5vh'}} /> : null}
                        {to ? <ArrowForwardIcon style={{height: '2.5vh'}}/> : null}
                        {rel.label} 
                    </Button>
                </Link>
            )}
        </Paper>
    }

    return (
        <div style={{display: 'grid', justifyItems: 'center'}}>
            <Link to='/' style={{position: 'absolute', top: '5vh', left: '5vh'}}>
                <IconButton style={{height: '10vh', width: '10vh'}}>
                    <ArrowBackIcon />
                </IconButton>
            </Link>
            {node ? <MainDesk>
                <div>
                    <h1 style={{textDecoration: 'underline', textDecorationColor: theme.palette.primary.main, fontSize: '5vh'}}>
                        {node?.label}
                    </h1>
                    <Paper style={{width: '60vh', padding: '5vh', fontSize: '2.5vh'}}>
                        <b>Ученое название:</b> <i>{node?.lat}</i> <br />
                        <b>Царство:</b> <i>{node?.kingdom}</i> <br />
                        
                        <br />
                        <Typography fontSize={'2.5vh'}>{node?.description}</Typography>
                    </Paper>
                </div>
                <div>
                    <h1 style={{color: 'rgba(0,0,0,0)', fontSize: '5vh'}}>'</h1>
                    {node?.upper.length ? <Relation 
                        label={'Для кого пища:'}
                        relations={toJS(node?.upper)}
                    /> : null}
                    {node?.lower.length ? <Relation 
                        label={'Чем питается:'}
                        relations={toJS(node?.lower)}
                        to={false}
                    /> : null}
                </div>
            </MainDesk> : <CircularProgress style={{alignSelf: 'center', justifySelf: 'center'}}/>}
        </div>
    )
}