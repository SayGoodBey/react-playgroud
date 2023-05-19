// src/models/count.ts

export default {
  namespace: 'count',
  state: {
    value: 0,
  },
  reducers: {
    increment(state: any) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement(state: any) {
      return {
        ...state,
        value: state.value - 1,
      };
    },
  },
};
