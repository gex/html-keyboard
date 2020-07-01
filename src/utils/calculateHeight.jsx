const calculateHeight = (keycaps) => {
  const minY = Math.min(...keycaps.map((keycap) => keycap.y))
  const maxY = Math.max(...keycaps.map((keycap) => keycap.y + keycap.height))
  return maxY - minY
}

export default calculateHeight
