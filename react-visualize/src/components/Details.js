import { observer } from "mobx-react-lite"
import { store } from "../store/Store"
import { DeleteButton, GoToButton } from "./Buttons"

const { Paper } = require("@mui/material")
const { default: React, useState, useEffect } = require("react")

const Details = ({deleteSelected}) => {
    const [node, setNode] = useState()

    useEffect(()=>{
        if (store.selectedId) {
            const node = store.nodes.filter((n)=>n.id===store.selectedId)[0]
            setNode(node)
        }
    }, [store.selectedId])

    const textPaperStyles = {
        width: "100% !important",
        height: '5vh !important',
        borderRadius: 0,
        display: 'grid',
        alignContent: 'center',
        padding: '1vh 1vw 1vh 1vw',
    }

    return (
        <div 
            style={{
                position: 'absolute',
                right: '5vw',
                top: '5vh',
                height: 'max-content',
                width: 'min-content',
                border: '3px solid #cccccc', 
                borderRadius: '1vh',
                padding: '2vh',
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr',
                fontSize: '2.2vh',
            }}
        >
            <Paper 
                sx={{...textPaperStyles, backgroundColor: '#f2f2f2'}}
                elevation={0}
            >
                <b>{node?.label}</b>
            </Paper>
            <Paper 
                sx={{...textPaperStyles, }}
                elevation={0}
            >
                <p><i style={{color: 'grey'}}>lat:</i> <i>{node?.lat}</i></p>
            </Paper>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr', marginTop: '10px'}}>
                <DeleteButton deleteSelected={deleteSelected}/>
                <GoToButton 
                    label="Детали" 
                />
            </div>
        </div>
    )
}

const o = observer(Details);
export {o as Details}