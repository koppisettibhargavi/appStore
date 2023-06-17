// Write your code here
const TabItem = props => {
  const {tabData, onActive, isActive} = props
  const {tabId, displayText} = tabData
  const classColor = isActive ? 'color1' : 'color2'
  onabort = () => {
    onActive(tabId)
  }

  return (
    <li className={classColor}>
      <button onClick={onabort} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
