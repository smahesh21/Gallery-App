import './index.css'

const ThumbnailItem = props => {
  const {eachImage, changeImageOnClick, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage
  const changeImage = () => {
    changeImageOnClick(id)
  }

  const highlight = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="photo-container">
      <button type="button" className="button" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          className={`thumbnail ${highlight}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
