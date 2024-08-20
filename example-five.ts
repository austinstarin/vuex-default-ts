// Example 5
(() => {
    interface Toy {
        color: string;
        shape: string;
        texture: string;
        era: {
            year: number;
        };
    }

    interface State {
        toy: Toy | Record<string, never>;
    }

    const state: State = {
        toy: {}
    };

    const getters = {
        toy: (state: State) => state.toy,
        color: (state: State) => state.toy.color,
        // (property) year: number
        year: (state: State) => state.toy.era.year,
    };
})();
