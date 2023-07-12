import React, { useEffect } from "react";
import Graph from "../components/Graph";
import { CircularProgress, Paper, Skeleton, Typography } from "@mui/material";
import { Details } from "../components/Details";
import { apiAxios } from "../services/http";
import { store } from "../store/Store";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

const MainPage = () => {
    useEffect(()=>{
        apiAxios.get('animals')
        .then((res)=>{
            store.nodes = res.data.map((n)=>{n.id=n.id+'';return n})
        })
        .then(()=>{
            apiAxios.get('relations')
            .then((res)=>{
                console.log(res.data)
                store.edges = res.data.map((e)=>{e.id=`${e.source}->${e.target}`; e.source=e.source+'';e.target=e.target+'';return e})
            })
        })
    }, [])

    const deleteSelected = (id) => {
        apiAxios.delete(`animals/${id}`)
        .then(()=>{
            store.selectedId = null
            store.edges = store.edges.filter(e=>e.target !== id && e.source !== id)
            store.nodes = store.nodes.filter(n=>n.id !== id)
        })
    }

    const handleNodeClick = (node) => {
        if (!node) {
            store.selectedId = null
        }

        store.selectedId = node.id
    }

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
            <div>
                <Typography variant='h3' style={{margin: '10%'}}>Граф</Typography>
                <Typography variant='h5' color='grey' style={{marginLeft: '10%', marginTop:'-10%'}}><i>Пищевая цепочка</i></Typography>
                <Skeleton width='80%' height='10vh' style={{marginLeft: '10%'}}/>
                <Skeleton width='80%' height='10vh' style={{marginLeft: '10%'}}/>
                <Skeleton width='80%' height='30vh' style={{marginLeft: '10%'}}/>
                <Skeleton animation='pulse' width='10vh' height='10vh' variant='circular' style={{margin:'20% 0 0 10%'}}/>
                <Skeleton width='80%' height='10vh' style={{marginLeft: '10%'}}/>
            </div>
            <div style={{position: 'relative', height: '100vh'}}>
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    {store.edges ? <Graph 
                        nodes={toJS(store?.nodes) || []}
                        edges={toJS(store?.edges) || []}
                        handleNodeClick={handleNodeClick}
                    /> : <CircularProgress style={{alignSelf: 'center', justifySelf: 'center'}}/>}
                </div>
                
                {store.selectedId ? <Details deleteSelected={deleteSelected}/> : null}
            </div>
        </div>
    );
}

const o = observer(MainPage)
export {o as MainPage};