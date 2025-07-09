import './BanList.css'

function BanList({ banList, onToggleBan }) {
  return (
    <div className="ban-list">
      <h3 className="ban-list-title">Ban List</h3>
      <p className="ban-list-description">
        Select an attribute in your listing to ban it
      </p>

      {banList.length === 0 ? (
        <p className="ban-list-empty">No banned items yet</p>
      ) : (
        <div className="ban-list-items">
          {banList.map((item, index) => (
            <button
              key={index}
              onClick={() => onToggleBan(item)}
              className="ban-list-item"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default BanList