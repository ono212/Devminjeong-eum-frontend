export type MainItemType = {
  wordId: string;
  wordName: string;
  wordDescription: string;
  wordDiacritic: string;
  wordSpeak?: string;
  wrongSpeak?: string;
  wordExample?: string;
  wordLike?: boolean;
};

export type MainDataType = {
  offset: number; // 현재 페이지
  pageSize: number; // 한페이지에 보여줄 아이템 개수
  totalItems: number;
  totalPages: number;
  wordAll: Array<MainItemType>;
};

export type PaginationPropType = {
  limit: number; // 페이지당 보여줄 데이터 개수
  total: number; // 전체 데이터 개수
  viewPaginationNums?: number; // 보여줄 페이지 개수, 기본값 4
  setCurrent: (value: number | ((prevCurrent: number) => number)) => void;
  current: number;
  style?: string;
};

export type TextSlicePrams = {
  text: string;
  limitLength: number;
  sliceLength: number;
};

export type WordDetail = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wrongPronunciations: string[];
  // \n으로 구분해 사용
  exampleSentence: string;

  // NOTE: metadata
  createdAt: Date;
  updatedAt: Date;
};

export type DefaultRes<TData> = {
  status: number;
  data: TData;
};
