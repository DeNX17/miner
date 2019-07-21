import { randMinesFields, CountMinesAround, OpenAroundFields } from '../../assets/functions.js'
export default {
  namespaced: true,
  state: {
    fields: [], // поля для игры
    amountMine: 15,
    coordX: 10, // длинна поля по горизонтали
    coordY: 10, // длинна по вертикале
    resultGame: false, // Результат игры
    update: false // Пременная для обновления при изминении массива полей
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
      let mines = randMinesFields(0, state.coordX - 1, state.amountMine) // rand coord of mines

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
        state.fields = OpenAroundFields(state.fields, payload.coordX, payload.coordY)
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
      if (state.fields[payload.coordY][payload.coordX].title === 'X') {
        state.fields[payload.coordY][payload.coordX].title = ''
      } else if (state.fields[payload.coordY][payload.coordX].title === '') {
        state.fields[payload.coordY][payload.coordX].title = 'X'
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
