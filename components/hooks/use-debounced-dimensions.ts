"use client"

import { useState, useEffect, useRef, RefObject } from "react"

interface Dimensions {
  width: number
  height: number
}

export function useDimensions(
  ref: RefObject<HTMLElement>,
  debounceMs: number = 100
): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return

      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
    })

    resizeObserver.observe(ref.current)

    // Set initial dimensions
    const { offsetWidth, offsetHeight } = ref.current
    setDimensions({ width: offsetWidth, height: offsetHeight })

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref, debounceMs])

  return dimensions
}