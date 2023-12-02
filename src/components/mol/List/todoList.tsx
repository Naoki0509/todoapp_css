import { useRecoilValue } from 'recoil'

import Link from 'next/link'

import { todoListState } from '~/components/atm/todoAtomState'
import styles from '~/styles/Home.module.css'

export const Todolist = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      {todoList.map((todo) => (
        <Link key={todo.id} href={`/${todo.id}`} passHref legacyBehavior>
          <div className={styles.todoCard}>
            <div>{todo.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
