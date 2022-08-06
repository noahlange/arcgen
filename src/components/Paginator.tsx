import * as BS from 'react-bootstrap-icons';
import ReactPaginate from 'react-paginate';

interface PaginatorProps {
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  forcePage?: number;
  onPageChange?: (item: { selected: number }) => void;
  onPageActive?: (item: { selected: number }) => void;
  onClick?(clickEvent: {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
  }): boolean | number | void;
}

export function Paginator(props: PaginatorProps): JSX.Element {
  return (
    <ReactPaginate
      previousLabel={<BS.ChevronLeft />}
      nextLabel={<BS.ChevronRight />}
      containerClassName="pagination"
      activeClassName="active"
      previousClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link disabled"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageRangeDisplayed={props.pageRangeDisplayed}
      pageCount={props.pageCount}
      onPageChange={props.onPageChange}
      marginPagesDisplayed={props.marginPagesDisplayed}
      onPageActive={props.onPageActive}
      forcePage={props.forcePage}
      onClick={props.onClick}
    />
  );
}
