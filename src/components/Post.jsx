/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post( { author, publishedAt, content }){

  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState('')
  

  const publishedDateFormatted = format (publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })
  
  const publishedDateRelativeToNow = formatDistanceToNow (publishedAt, { 
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment () {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  } 

  function deleteComment (commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
    
  return (
    <article className={styles.post}>
      <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
        
        <div className={styles.authorInfo}>
          <strong>{author.name} </strong>
          <span>{author.role}</span>
        </div>

      </div>
      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
         {publishedDateRelativeToNow}
      </time>
      </header>

      <div className={styles.content}>
        {content.map( line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}> {line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.comments}>
        <strong>Deixe seu feedback! </strong>
        <textarea 
        name="textComment"
        value={newCommentText} 
        placeholder="escreve ai um feedback!" 
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
          <button 
           type="submit" 
           disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map (comment => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  )
}