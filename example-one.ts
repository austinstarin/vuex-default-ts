// Example 1
(() => {
    interface Toy {
        color: string;
        shape: string;
        texture: string;
    }

    interface State {
        toy: Toy;
    }

    const state: State = {
        // Type '{}' is missing the following properties from type 'Toy': color, shape, texture ts(2739)
        toy: {}
    };

    const getters = {
        toy: (state: State) => state.toy,
        color: (state: State) => state.toy.color,
    };
})();
