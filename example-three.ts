// Example 3
(() => {
    interface Toy {
        color: string;
        shape: string;
        texture: string;
    }

    interface State {
        toy: Toy | Record<string, unknown>;
    }

    const state: State = {
        toy: {}
    };

    const getters = {
        toy: (state: State) => state.toy,
        // (property) Toy.color: unknown
        color: (state: State) => state.toy.color,
    };
})();
