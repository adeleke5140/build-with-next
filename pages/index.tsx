import type { NextPage } from 'next'
import Head from 'next/head'
import App from './components/App'


interface Todo{
    id: string
    name: string
    completed: boolean
}

const DATA: Todo[] = [
    { id: "todo-0", name:"Eat", completed: true},
    { id: "todo-1", name:"Sleep", completed: false},
    { id: "todo-2", name:"Repeat", completed: false}
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TodoMatic</title>
        <meta name="description" content="a lovely todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App tasks={DATA}/>
    </div>
  )
}

export default Home
