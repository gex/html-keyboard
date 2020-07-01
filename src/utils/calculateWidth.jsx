const calculateWidth = (keycaps) => {
  const minX = Math.min(...keycaps.map((keycap) => keycap.x))
  const maxX = Math.max(...keycaps.map((keycap) => keycap.x + keycap.width))
  return maxX - minX
}

export default calculateWidth
