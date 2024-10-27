import { createSlice } from '@reduxjs/toolkit';
import { hotNews, searchNews } from '../actions/allNews'
import { allNews } from '../types/News'


interface InitialState {
	allNews: allNews;
	page: number,
	search: string,
	status: boolean,
	apiStatus: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const InitialState: InitialState = {
	allNews: [],
	page: 1,
	search: '',
	status: false,
	apiStatus: 'idle'
}

const newsSlice = createSlice({
	name: 'news',
	initialState: InitialState,
	reducers: {
		setSearch(state, action) {
			state.search = action.payload;
			state.page = 1
			state.allNews = [];
		}
	},
	extraReducers: builder => {
		builder
			.addCase(searchNews.fulfilled, (state, action) => {
				state.allNews = [...state.allNews, ...action.payload];
				state.page = state.page + 1;
				state.status = false;
				state.apiStatus = 'idle';
			})
			.addCase(searchNews.pending, state => {
				state.apiStatus = 'pending';
				state.status = true;
			})
			.addCase(hotNews.pending, state => {
				state.status = true;
				state.apiStatus = 'pending';
			})
			.addCase(hotNews.fulfilled, (state, action) => {
				console.log(action.payload)
				state.allNews = [...state.allNews, ...action.payload];
				state.page = state.page + 1;
				state.status = false;
				state.apiStatus = 'idle';
			});
	}
	
});

export const { setSearch } = newsSlice.actions
export default newsSlice.reducer