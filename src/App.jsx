import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'



function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
        <Post 
        author= "Lucas Barcelos" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim molestias doloribus dolor sunt tempora. Incidunt asperiores, sequi praesentium doloribus assumenda repudiandae error sit facere. Illum doloremque id consequatur quibusdam veniam."
      />

      <Post
        author="Algo aqui"
        content="Um post muito legal!"
      />
        </main>
      </div>
    </div>
  )
}

export default App
