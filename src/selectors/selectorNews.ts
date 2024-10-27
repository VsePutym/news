import { RootState } from '../stores/store'

export const newsSelectors = {
	allNews: (state: RootState) => state.news.allNews,
	page: (state: RootState) => state.news.page,
	search: (state: RootState) => state.news.search,
	status: (state: RootState) => state.news.status,
};
