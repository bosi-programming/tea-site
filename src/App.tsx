import { useState } from 'react'
import { Title, Input } from './components'

function App() {

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen bg-white dark:bg-slate-800">
      <Title>Tea Site</Title>
      <form className='flex flex-col justify-center items-center mt-10'>
        <Input labelChildren='Tea' />
      </form>
    </main>
  )
}

export default App
