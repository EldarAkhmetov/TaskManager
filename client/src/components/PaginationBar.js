import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/reducers/tasksReducer';
import { createPages } from '../utils/pagesCreator';


const PaginationBar = () => {
  const { tasksList, currentPage, totalCount, tasksLimit, sortByName, sortByEmail, sortByStatus } = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();
  const pagesCount = Math.ceil(totalCount / tasksLimit);
  const pages = [];
  createPages(pages, pagesCount, currentPage);
  return (
    <Container>
      <Pagination className='mt-5 justify-content-center'>
        <Pagination.First
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={() => { dispatch(setCurrentPage(1)); }}
        />
        <Pagination.Prev
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={() => { dispatch(setCurrentPage(currentPage - 1)); }}
        />
        {pages.map((page, index) =>
          <Pagination.Item
            key={index}
            className={page === currentPage ? 'active disabled' : '' }
            onClick={() => { dispatch(setCurrentPage(page));}}
          >
            {page}
          </Pagination.Item>)
        }
        <Pagination.Next
          className={currentPage === pagesCount ? 'disabled' : ''}
          onClick={() => { dispatch(setCurrentPage(currentPage + 1)); }}
        />
        <Pagination.Last
          className={currentPage === pagesCount ? 'disabled' : ''}
          onClick={() => { dispatch(setCurrentPage(pagesCount)); }}
        />
      </Pagination>
    </Container>
  );
};

export default PaginationBar;