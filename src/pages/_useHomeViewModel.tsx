import { useRef, useState } from 'react'

export default function useHomeViewModel() {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuButtonNavbarRef = useRef<HTMLButtonElement>(null)
  
  return {
    isOpen, setIsOpen,
    menuButtonNavbarRef,
  }
}
