import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Letter.module.css'

const Letter = ({ letter }) => {
  const [ isHovering, setIsHovering ] = useState(false)
  const letterRef = useRef();
  const start = () => {
    letterRef.current?.classList.add('wobble');
    setIsHovering(!isHovering);
  };

  useEffect(() => {
    setTimeout(() => {
      letterRef.current?.classList.remove('wobble');
    }, 3001)
  },[isHovering])

  return (
    <span onMouseEnter={start} ref={letterRef} className={`${styles.letter} header`}>{letter}</span>
  )
}

export default Letter