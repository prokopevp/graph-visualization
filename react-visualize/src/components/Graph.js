import { React, useRef, useState } from 'react';
import { GraphCanvas, useSelection } from 'reagraph';

export default ({nodes, edges, handleNodeClick}) => {
    const graphRef = useRef()
    
    const {selections, actives, onNodeClick, onCanvasClick} = useSelection({
        ref: graphRef,
        nodes: nodes,
        edges: edges,
        pathSelectionType: 'all',
        type: 'single',
    })

    return <GraphCanvas
        labelFontUrl='./fonts/Roboto Regular.ttf'
        selections={selections}
        onNodeClick={(node, props)=>{handleNodeClick(node);return onNodeClick(node, props)}}
        onCanvasClick={(props)=>{handleNodeClick(false);return onCanvasClick(props)}}
        actives={actives}
        ref={graphRef}
        nodes={nodes}
        edges={edges}
        draggable={false}
        sizingType="attribute" 
        sizingAttribute="size"
    />
};