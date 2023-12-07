import React from 'react'

import styles from './Layout.module.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Todo App</h1>
        </div>
        <div></div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        {new Date().getFullYear()} &copy; Todo App
      </footer>
    </>
  )
}
