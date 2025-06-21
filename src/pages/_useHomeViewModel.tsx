import { useState } from 'react'

export default function useHomeViewModel() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen, setIsOpen,
  }
}
