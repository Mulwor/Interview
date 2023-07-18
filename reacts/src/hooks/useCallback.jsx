import React from "react"

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered")
  return <button onClick={onClick}>Click me</button>
})

export const UseCallback = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  console.log("ParentComponent rendered")
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  )
}
