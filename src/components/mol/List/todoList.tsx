import { useRecoilValue, useSetRecoilState } from 'recoil'

import Link from 'next/link'

import { todoListState } from '~/components/atm/todoAtomState'
import styles from '~/styles/Home.module.css'

export const Todolist = () => {
  const todoListVaue = useRecoilValue(todoListState)
  const todoList = useSetRecoilState(todoListState)

  const deleteTodo = (id?: string) => {
    todoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((todo) => todo.id !== id)
      return newTodoList
    })
  }

  return (
    <div>
      {todoListVaue.map((todo) => (
        <div className={styles.todoCard} key={todo.id}>
          <Link href={`/${todo.id}`} legacyBehavior>
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.memo}</p>
              <time>{todo.createdAt}</time>
            </div>
          </Link>
          <div>
            <button onClick={() => deleteTodo?.(todo.id)}>Done</button>
          </div>
        </div>
      ))}
    </div>
  )
}
