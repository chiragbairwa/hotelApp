import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [
			{
				hi: 'asda',
			},
		],
	},
	reducers: {
		addItem: (state: { items: any }, action) => {
			state.items.push(action.payload)
		},
		removeItem: (state: { items: any }, action) => {
			state.items.splice(action.payload.index, 1)
		},
		syncCart: (state: { items: any }, action) => {
			state.items = action.payload
		},
		clearCart: (state: any) => {
			state.items = []
		},
	},
})

export const { addItem, removeItem, clearCart, syncCart } = cartSlice.actions
export default cartSlice.reducer
