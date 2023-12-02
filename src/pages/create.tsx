import { TodoListForm } from '~/components/mol/Form/createTodoForm'
import styles from '~/styles/Create.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <TodoListForm />
      </div>
    </>
  )
}

export default Home
