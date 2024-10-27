import { RootState } from '../stores/store'

export const selectorNews = (state: RootState) => state.news.allNews
export const selectorPage = (state: RootState) => state.news.page;
export const selectorSearch = (state: RootState) => state.news.search;
export const selectorStatus = (state: RootState) => state.news.status