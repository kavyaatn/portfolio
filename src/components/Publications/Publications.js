import uniqid from 'uniqid'
import { publications } from '../../portfolio'
import './Publications.css'
import PublicationContainer from '../PublicationsContainer/PublicationsContainer'

const Publications = () => {
  if (!publications.length) return null

  return (
    <section id='publications' className='section publications'>
      <h2 className='section__title'>Publications</h2>

      <div className='publications__grid'>
        {publications.map((publication) => (
          <PublicationContainer key={uniqid()} publication={publication} />
        ))}
      </div>
    </section>
  )
}

export default Publications
