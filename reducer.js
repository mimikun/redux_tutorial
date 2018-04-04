import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  //  今のところ、アクションを処理しないでください
  //  与えられた状態を返します。
  return state
}
