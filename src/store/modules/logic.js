import { randMinesFields, CountMinesAround, OpenAroundFields } from '../../assets/functions.js'
export default {
  namespaced: true,
  state: {
    fields: [], // fields for game
    coordX: 5, // length for x
    coordY: 5, // length for y
    resultGame: false, // result Game
    update: false // tool var
  },
  getters: {
    GetFields (state) {
      return state.fields
    },
    Update (state) {
      return state.update
    },
    GetStatusGame (state) {
      return state.resultGame
    }
  },
  mutations: {
    RenderFields (state) {
      state.resultGame = false
      // eslint-disable-next-line
      let mines = randMinesFields(0, 4, 3) // rand coord of mines
      for (let y = 0; y < state.coordY; y++) {
        state.fields[y] = []

        for (let x = 0; x < state.coordX; x++) {
          state.fields[y][x] = {
            title: '',
            value: ''
          }
        }
      }

      mines.forEach((item) => {
        state.fields[item[0]][item[1]].value = 'mine'
      })
    },
    PickField (state, payload) {
      let countMine, isCleanField
      // Если попал на мину
      if (state.fields[payload.coordY][payload.coordX].value === 'mine') {
        state.resultGame = 'Lose'
      } else {
        // подсчет мин вокруг поля
        countMine = CountMinesAround(state.fields, payload.coordX, payload.coordY)

        state.fields[payload.coordY][payload.coordX].title = String(countMine)
        state.fields[payload.coordY][payload.coordX].value = 'opened'
      }

      if (countMine === 0) {
        let amountZeroAround = [{
          coordX: payload.coordX,
          coordY: payload.coordY
        }];
        let index = 0;

        do {
          console.log(amountZeroAround)
          let res = OpenAroundFields(state.fields, amountZeroAround[0].coordX, amountZeroAround[0].coordY)
          state.fields = res.fields
          amountZeroAround = res.ZeroAround;
          index++
        } while (index < 10)
        //} while (amountZeroAround.length !== 0)
        
        //-------------------------
        //let amountZeroAround = OpenAroundFields(state.fields, payload.coordX, payload.coordY)
        // можно заменить на forEach
        // можно сделать цикл do while
        /*
        for (let i = 0; i < amountZeroAround.length; i++) {
          OpenAroundFields(state.fields, )
        }
        */
        /*
        amountZeroAround.forEach((item) => {
          OpenAroundFields(state.fields, item.coordX, item.coordY)
        })
        */
      }

      isCleanField = false

      // Проверка на количество пустых полей
      for (let i = 0; i < state.fields.length; i++) {
        for (let j = 0; j < state.fields[i].length; j++) {
          if (state.fields[i][j].value === '') {
            isCleanField = true
            break
          }
        }
      }

      if (!isCleanField) {
        state.resultGame = 'Win'
      } else {
        isCleanField = false
      }
      state.update = !state.update // обновление массива полей
    },
    pickBomb (state, payload) {
      if (state.fields[payload.coordY][payload.coordX].title === 'bomb') {
        state.fields[payload.coordY][payload.coordX].title = ''
      } else if (state.fields[payload.coordY][payload.coordX].title === '') {
        state.fields[payload.coordY][payload.coordX].title = 'bomb'
      }
      state.update = !state.update
    }
  },
  actions: {
    RenderFields (store) {
      store.commit('RenderFields')
    },
    PickField (store, payload) {
      store.commit('PickField', payload)
    },
    pickBomb (store, payload) {
      store.commit('pickBomb', payload)
    }
  }
}

/*

for (let y = payload.coordY - 1; y < payload.coordY + 2; y++) {
  for (let x = payload.coordX - 1; x < payload.coordX + 2; x++) {
    if (state.fields[y] !== undefined && state.fields[y][x] !== undefined) {
      let minesInField = CountMinesAround(state.fields, x, y)

      state.fields[y][x].title = String(minesInField)
      state.fields[y][x].value = 'opened'

      if (minesInField === 0) {
        let minesInField = CountMinesAround(state.fields,)
      }
    }
  }
}
*/