const { observable, makeObservable } = require("mobx");

class Store {
    nodes = [];
    edges = [];
    selectedId = null;

    constructor () {
        makeObservable(this, {
            nodes: observable,
            edges: observable,
            selectedId: observable,
        });
    }
}

export const store = new Store();