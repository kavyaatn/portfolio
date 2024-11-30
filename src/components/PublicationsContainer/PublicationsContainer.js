import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './PublicationsContainer.css'

const PublicationContainer = ({ publication }) => (
  <div className='publication'>
    <h3>{publication.name}</h3>

    <p className='publications__description'>{publication.description}</p>
    {publication.publication && (
      <ul className='publications__stack'>
        <li key={uniqid()} className='publications__stack-item'>
          {publication.publication}
        </li>
      </ul>
    )}

    {publication.livePreview && (
      <a
        href={publication.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default PublicationContainer
