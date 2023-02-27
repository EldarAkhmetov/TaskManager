const SET_TASKS = 'SET_TASKS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_SORT_BY_NAME = 'SET_SORT_BY_NAME';
const SET_SORT_BY_EMAIL = 'SET_SORT_BY_EMAIL';
const SET_SORT_BY_STATUS = 'SET_SORT_BY_STATUS';

const defaultState = {
  tasksList: [],
  currentPage: 1,
  totalCount: 0,
  tasksLimit: 3,
  sortByName: null,
  sortByEmail: null,
  sortByStatus: null
};

export default function tasksReducer(state = defaultState, action) {
  switch (action.type) {
  case SET_TASKS:
    return {
      ...state,
      tasksList: [...action.payload]
    };
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload
    };
  case SET_TOTAL_COUNT:
    return {
      ...state,
      totalCount: action.payload
    };
  case SET_SORT_BY_NAME:
    return {
      ...state,
      sortByName: action.payload,
      sortByEmail: null,
      sortByStatus: null
    };
  case SET_SORT_BY_EMAIL:
    return {
      ...state,
      sortByName: null,
      sortByEmail: action.payload,
      sortByStatus: null
    };
  case SET_SORT_BY_STATUS:
    return {
      ...state,
      sortByName: null,
      sortByEmail: null,
      sortByStatus: action.payload
    };
  default:
    return state;
  }
}

export const setTasks = (list) => ({
  type: SET_TASKS,
  payload: list
});

export const setCurrentPage = (number) => ({
  type: SET_CURRENT_PAGE,
  payload: number
});

export const setTotalCount = (number) => ({
  type: SET_TOTAL_COUNT,
  payload: number
});

export const setSortByName = (sortType) => ({
  type: SET_SORT_BY_NAME,
  payload: sortType
});
export const setSortByEmail = (sortType) => ({
  type: SET_SORT_BY_EMAIL,
  payload: sortType
});
export const setSortByStatus = (sortType) => ({
  type: SET_SORT_BY_STATUS,
  payload: sortType
});