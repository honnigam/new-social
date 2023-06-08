import { Comment } from './Comment.jsx'
import styles from './Post.module.css'


export function Post(){
  return (
    <article className={styles.post}>
      <header>
      <div className={styles.author}>
        <img className={styles.avatar}src="https://github.com/honnigam.png" />
        
        <div className={styles.authorInfo}>
          <strong>Lucas Barcelos </strong>
          <span>Web Developer</span>
        </div>

      </div>
      <time title="6 de Junho de 2023 as 11:44h" dateTime="2023-06-03 11:44:05">Publicado ha 1hr</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p><a href=""> jane.design/doctorcare</a></p>
      <p>
        <a href="">#novoprojeto</a> {' '}
        <a href="">#nlw </a> {' '}
        <a href="">#rocketseat</a>
      </p>
      </div>
      <form className={styles.comments}>
        <strong>Deixe seu feedback! </strong>
        <textarea placeholder="escreve ai um feedback!" 
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}