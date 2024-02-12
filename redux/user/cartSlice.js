import { createSlice } from '@reduxjs/toolkit'

const syncBackend = request => {
	if (request.action === 'clearCart') {
		fetch('http://192.168.1.115:8000/cart/empty/', {
			headers: {
				method: 'DELETE',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
			},
		}).catch(err => {
			console.log(err)
		})
	} else {
		fetch('http://192.168.1.115:8000/cart/update/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
			},
			body: JSON.stringify(request.products),
		}).catch(err => {
			console.log(err)
		})
	}
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		is_admin: false,
	},
	reducers: {
		addItem: (state, action) => {
			state.items = []
			state.items.push(...action.payload)

			syncBackend({ action: 'removeCart', products: state.items })
		},
		removeItem: (state, action) => {
			for (let i = 0; i < state.items.length; i++) {
				if (state.items[i].name === action.payload) {
					state.items.splice(i, 1)
					break
				}
			}

			syncBackend({ action: 'removeCart', products: state.items })
		},
		syncCart: (state, action) => {
			state.items = action.payload
		},

		clearCart: state => {
			state.items = []
			syncBackend({ action: 'clearCart' })
		},
		setAdmin: (state, action) => {
			state.is_admin = action.payload
		},
	},
})

export const { addItem, removeItem, clearCart, syncCart, setAdmin } =
	cartSlice.actions
export default cartSlice.reducer
