import { fetchTasks } from '../http/tasksAPI';
import { setTasks, setTotalCount } from '../store/reducers/tasksReducer';

export const getTasks = 
    (page, limit, sortByName, sortByEmail, sortByStatus) =>
      async (dispatch) => {
        try {
          const { data } = await fetchTasks(page, limit, sortByName, sortByEmail, sortByStatus);
          dispatch(setTotalCount(data.count));
          dispatch(setTasks(data.rows));
        } catch (e) {
          alert(e.response.data.message);
        }
      };
