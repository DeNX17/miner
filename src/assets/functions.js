function randMinesFields (min, max, quantity = 1) {
  let arrMines = []

  for (let i = 0; i < quantity; i++) {
    let randX = Math.floor(min + Math.random() * (max + 1 - min))
    let randY = Math.floor(min + Math.random() * (max + 1 - min))
    let coordMine = [randX, randY]

    if (arrMines.indexOf(coordMine) === -1) {
      arrMines.push(coordMine)
    } else {
      i--
    }
  }

  return arrMines
}

function CountMinesAround (fields, coordX, coordY) {
  let countMines = 0

  for (let y = coordY - 1; y < coordY + 2; y++) {
    for (let x = coordX - 1; x < coordX + 2; x++) {
      if (fields[y] !== undefined && fields[y][x] !== undefined) {
        if (fields[y][x].value === 'mine') { countMines += 1 }
      }
    }
  }
  return countMines
}

function OpenAroundFields (fields, coordX, coordY) {
  for (let y = coordY - 1; y < coordY + 2; y++) {
    if (y < 0 || y >= fields.length) continue
    for (let x = coordX - 1; x < coordX + 2; x++) {
      if (x < 0 || x >= fields[0].length) continue
      if (fields[y][x].title !== '') {
        continue
      }

      let minesInField = CountMinesAround(fields, x, y)

      fields[y][x].title = String(minesInField)
      fields[y][x].value = 'opened'
      if (minesInField === 0) {
        OpenAroundFields(fields, x, y)
      }
    }
  }
  return fields
}

export {
  randMinesFields,
  CountMinesAround,
  OpenAroundFields
}
