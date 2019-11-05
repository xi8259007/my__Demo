import {createStore} from "redux";

// createStore(state, action)			数据: json,数组 类型: type
// store.dispatch('action', payload)	派发 触发	{type:''}
// store.subscribe(handler)				订阅/监听 - 变化的时候
// store.getState()						获取状态
// store.replaceReducer					切换reducer

const store = createStore((state = {count: 0}, action) => {
	// console.log(action)
	switch (action.type) {
		case 'add':
			state.count++
			return state
		case 'min':
			state.count--
			return state
		default:
			return state
	}
})
export default store;