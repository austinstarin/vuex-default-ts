// Example 4
(() => {
    interface Toy {
        color: string;
        shape: string;
        texture: string;
    }

    interface State {
        toy: Toy | null;
    }

    const state: State = {
        toy: null
    };

    const getters = {
        toy: (state: State) => state.toy,
        // (property) Toy.color: string | undefined
        color: (state: State) => state.toy?.color,
    };
})();
