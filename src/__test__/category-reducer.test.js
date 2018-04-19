import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: 'null'})
    expect(result).toEqual([])
  })

  test('result CATEGORY_CREATE should append to the array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }

    let result = categoryReducer([], action)
    expect(result.length).toBe(1)
    expect(result[0]).toBe(action.payload)
  })

  test('state CATEGORY_CREATE should append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'goodbye world',
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)
  })

  test('should pass', () => {
    expect(true).toEqual(true)
  })
})
