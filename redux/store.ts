import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './user/cartSlice'

const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
})

export default store
