import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'


const Article = () => {
  const { name } = useParams()
  const art = articles.find(x => x.name === name)
  if (!art) {
    return <h1 className='sm:text-4xl text-2xl font-bold m-20 text-gray-900'> Article does not exist</h1>
  }
  return (
    <div className='m-20'>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'> {art.title}</h1>
      {

        art.content.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))
      }
    </div>
  )
}

export default Article