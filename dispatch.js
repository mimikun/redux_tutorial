import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

// 初期状態を記録
console.log(store.getState())

// 状態が変わるたびにログに記録する
// subscribe（）は、リスナーの登録を解除する関数を返します
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// いくつかのactionをdispathする
store.dispath(addTodo('actionsについて学ぶ'))
store.dispath(addTodo('reducersについて学ぶ'))
store.dispath(addTodo('storeについて学ぶ'))
store.dispath(toggleTodo(0))
store.dispath(toggleTodo(1))
store.dispath(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()