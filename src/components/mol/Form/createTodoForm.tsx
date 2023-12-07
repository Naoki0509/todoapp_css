import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

import Router from 'next/router'

import { zodResolver } from '@hookform/resolvers/zod'

import { todoListState } from '~/components/atm/todoAtomState'
import styles from '~/styles/Create.module.css'
import { TodoInputType, inputShema } from '~/types'

export const TodoListForm = ({ todo }: { todo?: TodoInputType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInputType>({
    defaultValues: {
      id: todo ? todo.id : Math.random().toString(32).substring(2),
      createdAt: todo ? todo.createdAt : new Date().toLocaleString(),
      title: todo ? todo.title : '',
      memo: todo ? todo.memo : '',
      done: todo ? todo.done : false,
    },

    resolver: zodResolver(inputShema),
    reValidateMode: 'onBlur',
  })

  const setTodoList = useSetRecoilState(todoListState)

  const addTodo = (data: TodoInputType) => {
    setTodoList((oldTodoList) => [...oldTodoList, data])
    Router.push('/')
  }

  const updateTodo = (data: TodoInputType) => {
    setTodoList((oldTodoList) => {
      const index = oldTodoList.findIndex((todo) => todo.id === data.id)
      const newTodoList = [...oldTodoList]
      newTodoList[index] = data
      return newTodoList
    })
    Router.push('/')
  }

  return (
    <div className={styles.main}>
      <div onClick={Router.back}>← Back</div>
      <h1>{todo ? 'Update Todo' : 'Create Todo'}</h1>

      <time>{todo ? `作成日時${todo?.createdAt}` : null}</time>

      <form
        className={styles.form}
        onSubmit={handleSubmit(todo ? updateTodo : addTodo)}
      >
        <label>タイトル</label>
        <input className={styles.input} type="text" {...register('title')} />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
        <label>メモ</label>
        <textarea {...register('memo')} className={styles.input} />
        <div className={styles.buttonGroup}>
          <button type="submit">{todo ? '更新' : '追加'}</button>
        </div>
      </form>
    </div>
  )
}
