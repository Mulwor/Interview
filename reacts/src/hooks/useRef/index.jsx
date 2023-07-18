import React, { useRef, useState } from "react"
import "./style.css"

// * useRef— это React Hook, который позволяет вам ссылаться на значение, которое не требуется для рендеринга.

export const GetValueWithUseRef = () => {
  return (
    <div>
      <GetCount />
      <GetInputValue />
      <GetSecundomer />
      <ScrollImage />
      <WorkWithVideo />
    </div>
  )
}

// Primer #1
const GetCount = () => {
  let counterRef = React.useRef(0)

  const handleClick = () => {
    counterRef.current = counterRef.current + 1
    console.log("You clicked " + counterRef.current + " times!")
  }

  return (
    <div>
      <p>Счетчик, при каждом клике выводится в консоль</p>
      <button onClick={handleClick}>Кнопелла</button>
    </div>
  )
}

// Primer #2
const GetInputValue = () => {
  const inputRef = React.useRef(null)

  const handleClickInputRef = () => {
    // * Получаем значение из input
    console.log(inputRef.current.value)

    // * Изменяем значение input
    inputRef.current.value = "Новое значение"

    // * Фокусируемся на input
    inputRef.current.focus()
  }

  return (
    <div>
      <hr />
      <p>Вводим значение в инпут и получаем их в консоле</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleClickInputRef}>Кнопелла</button>
    </div>
  )
}

// Primer #3
const GetSecundomer = () => {
  const [startTime, setStartTime] = React.useState(null)
  const [now, setNow] = React.useState(null)
  const intervalRef = React.useRef(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <hr />
      <p>Time passed: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

// Primer #4
const ScrollImage = () => {
  const listRef = useRef(null)

  function scrollToIndex(index) {
    const listNode = listRef.current

    //* This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index]

    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  return (
    <>
      <hr />
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  )
}

// Primer #5
const WorkWithVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(!isPlaying)

    nextIsPlaying === true ? ref.current.play() : ref.current.pause()
  }

  return (
    <>
      <hr />
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
