// Write your code here
const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData
  return (
    <li>
      <div>
        <img src={imageUrl} alt={appName} />
        <p>{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
