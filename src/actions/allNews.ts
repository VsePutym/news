import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiKey, EVERYTHING, TOP_HEADLINES, URL } from '../Api/api'
import axios from 'axios'
import { allNews } from '../types/News'


export const searchNews = createAsyncThunk<allNews, { text: string, page: number }>(
	'searchNews',
	async ({text, page}, {rejectWithValue}) => {
		try {
			const response = await axios.get(
				URL + EVERYTHING + `q=${text}&sortBy=popularity&language=ru&pageSize=10&page=${page}&apiKey=${apiKey}`);
			return response.data.articles
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

export const hotNews = createAsyncThunk<allNews, { page: number}> (
	'hotNews',
	async ({ page}, {rejectWithValue}) => {
		try {
			const response = await axios.get(
				URL + EVERYTHING + `q=новости&sortBy=publishedAt&language=ru&pageSize=10&page=${page}&apiKey=${apiKey}`);
			return response.data.articles;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)