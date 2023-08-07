import { produce } from 'immer'; // 导入 produce 函数
import { createSelector } from 'reselect';

import { largeComputation } from '@/utils';
const getPerson = (state: any) => {
  console.log('state---', state);
  return state.person.personInfo;
};
export const getPersonName = createSelector(getPerson, (person: any) => {
  largeComputation();
  return person.name;
});

export default {
  namespace: 'person',
  state: {
    personInfo: {
      name: '张三',
      age: 18,
      hobby: ['打篮球', '唱歌'],
    },
  },
  reducers: {
    changeName(state: any, action) {
      return produce(state, (draft: any) => {
        const name = action.payload;
        draft.personInfo.name = name;
      });
    },
    changeAge(state: any, action) {
      return produce(state, (draft: any) => {
        const age = action.payload;
        draft.personInfo.age = age;
      });
    },
    changeHobby(state: any, action) {
      return produce(state, (draft: any) => {
        const hobby = action.payload;
        draft.personInfo.hobby = hobby;
      });
    },
  },
  // selectors: {
  //   getPersonName,
  // },
};
