import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		username: '',
		email: '',
	},
	reducers: {
		syncUser: (state, action) => {
			// state.items = action.payload
		},
	},
})

export const { syncUser } = userSlice.actions
export default userSlice.reducer
