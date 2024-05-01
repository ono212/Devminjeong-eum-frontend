export const WORD_LIST_PATH = '/home';
export const WORD_DETAIL_PATH = '/words/:wordId';
export const LOGIN_PATH = '/';
export const QUIZ_PATH = '/quiz';

export const NOTICE_PATH = '/notice';

export const SEARCH_PATH = '/word/search/:wordName';

export const getWordDetailPath = (wordId: string) => `/words/${wordId}`;
export const getSearchPath = (wordName: string) => `/word/search/${wordName}`;
