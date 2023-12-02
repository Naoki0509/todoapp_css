import { useRecoilValue } from 'recoil'

import { useRouter } from 'next/router'

import { todoListState } from '~/components/atm/todoAtomState'
import { TodoListForm } from '~/components/mol/Form/createTodoForm'
import styles from '~/styles/Create.module.css'

const TodobyId = () => {
  const router = useRouter()

  const { id } = router.query

  const todoList = useRecoilValue(todoListState)
  const todo = todoList.find((todo) => todo.id === id)

  return (
    <div className={styles.main}>
      <TodoListForm todo={todo} />
    </div>
  )
}

export default TodobyId
