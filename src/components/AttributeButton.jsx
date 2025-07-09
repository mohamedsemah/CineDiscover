import './AttributeButton.css'

function AttributeButton({ attribute, isBanned, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`attribute-button ${isBanned ? 'banned' : 'normal'}`}
    >
      {attribute}
    </button>
  )
}

export default AttributeButton