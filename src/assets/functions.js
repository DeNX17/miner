function randMinesFields(min, max, quantity = 1) {
  let arrMines = [];

  for (let i = 0; i < quantity; i++) {
    let randX = Math.floor(min + Math.random() * (max + 1 - min));
    let randY = Math.floor(min + Math.random() * (max + 1 - min));
    let coordMine = [randX, randY];
    
    if (arrMines.indexOf(coordMine) === -1) {
      arrMines.push(coordMine);
    } else {
      i--;
    }
  }

  return arrMines;
}

function CountMinesAround (fields, coordX, coordY) {
  let countMines = 0;

  for (let y = coordY - 1; y < coordY + 2; y++) {
    for (let x = coordX - 1; x < coordX + 2; x++) {
      if (fields[y] !== undefined && fields[y][x] !== undefined) {
        if (fields[y][x].value === 'mine') { countMines += 1 }
      }
    }
  }
  return countMines;
}

function OpenAroundFields (fields, coordX, coordY) {
  let ZeroAround = [];

  for (let y = coordY - 1; y < coordY + 2; y++) {
    for (let x = coordX - 1; x < coordX + 2; x++) {
      if (fields[y] !== undefined && fields[y][x] !== undefined) {

        let minesInField = CountMinesAround(fields, x, y)

        fields[y][x].title = String(minesInField)
        fields[y][x].value = 'opened'

        if (minesInField === 0) {
          if (x !== coordX || y !== coordY){
            ZeroAround.push({
              coordX: x,
              coordY: y
            })
          }
        }
      }
    }
  }
  return {fields, ZeroAround};
}
/*
function CountZeroAround (fields, coordX, coordY) {
  let amountZero = 0;

  for (let y = coordY - 1; y < coordY + 2; y++) {
    for (let x = coordX - 1; x < coordX + 2; x++) {
      if (fields[y] !== undefined && fields[y][x] !== undefined) {
        if (fields[y][x])
      }
    }
  }

  return amountZero;
}*/

export {
  randMinesFields,
  CountMinesAround,
  OpenAroundFields
}
