import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'



export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/honnigam.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Barcelos</strong>
              <time title="6 de Junho de 2023 as 11:44h" dateTime="2023-06-03 11:44:05">Cerca de 1hr atras</time>
            </div>

            <button title="Delter comentario">
              <Trash size={20} />
            </button>
          </header>
          <p> Muito bom! parabens 👏🏻👏🏻👏🏻</p>

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