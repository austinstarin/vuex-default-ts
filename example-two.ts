// Example 2
(() => {
    interface Toy {
        // Make all keys of Toy optional
        color?: string;
        shape?: string;
        texture?: string;
        era?: {
            year: number;
        };
    }

    interface State {
        toy: Toy;
    }

    const state: State = {
        // No error, Type '{}' is missing the following properties from type 'Toy': color, shape, texture ts(2739)
        toy: {}
    };

    const getters = {
        toy: (state: State) => state.toy,
        color: (state: State) => state.toy.color,
        year: (state: State) => state.toy.era?.year,
    };
})();
