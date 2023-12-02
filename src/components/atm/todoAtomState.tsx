import { atom } from 'recoil'

import { TodoInputType } from '~/types'

export const todoListState = atom<TodoInputType[]>({
  key: 'todoListState',
  default: [],
})
