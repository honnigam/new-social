/* eslint-disable react/prop-types */
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'



export function Comment({ content, onDeleteComment }) {

  function handleDeleteThisComment() {
    onDeleteComment(content);
  }
  
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/honnigam.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Barcelos</strong>
              <time title="6 de Junho de 2023 as 11:44h" dateTime="2023-06-03 11:44:05">Cerca de 1hr atras</time>
            </div>

            <button onClick = {handleDeleteThisComment} title="Delter comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}