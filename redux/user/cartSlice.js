import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [{}, {}],
	},
	reducers: {
		addItem: (state, action) => {
			state.items = []
			state.items.push(...action.payload)
		},
		removeItem: (state, action) => {
			// state.items.splice(action.payload.index, 1)
			state.items.pop()
		},
		syncCart: (state, action) => {
			state.items = action.payload
		},
		clearCart: state => {
			state.items = []
		},
	},
})

export const { addItem, removeItem, clearCart, syncCart } = cartSlice.actions
export default cartSlice.reducer
