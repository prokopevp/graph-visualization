import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from "@mui/material"
import React, { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { store } from "../store/Store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { apiAxios } from "../services/http";

const BUTTONS_HEIGHT = '5vh !important'

const GoToButton = ({
    label="",
}) => {

    return <Link style={{textDecoration: 'none'}} target='_blank' to={`/details/${store.selectedId}`}><Button 
        variant="contained" 
        disableElevation
        sx={{
            width: "10vw", 
            borderRadius: 0, 
            textTransform: 'none',
            height: BUTTONS_HEIGHT,
        }}
    >
        <Typography style={{fontSize: '2.2vh'}}>{label}</Typography>
        <ArrowForwardIcon style={{height: '2vh', width: '2vh',}}/>
    </Button></Link>
}

const o = observer(GoToButton)
export {o as GoToButton}

const DeleteButton = ({
    deleteSelected
}) => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleAgree = () => {
        deleteSelected(store.selectedId)
        setOpen(false)
    }

    const deletingNodeLabel = store?.nodes.filter(n=>n.id===store.selectedId)[0].label

    const DeleteDialog = () => 
        <Dialog 
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="save-dialog-title">
                Удаление
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="save-dialog-description">
                    Вы уверены что хотите удалить узел <i><b>{deletingNodeLabel}</b></i>? <br/>
                    Это действие невозможно будет отменить.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    color='error'
                    onClick={handleAgree}
                >
                    Да, удалить
                </Button>
                <Button
                 onClick={handleClose}
                >
                    Нет
                </Button>
            </DialogActions>
        </Dialog>
    

    return <div>
        <DeleteDialog />
        <IconButton 
            color='error' 
            sx={{borderRadius: 0, height: BUTTONS_HEIGHT}}
            onClick={()=>{setOpen(true)}}
        >
            <DeleteIcon/>
        </IconButton>
    </div>
}

const oo = observer(DeleteButton)
export {oo as DeleteButton}