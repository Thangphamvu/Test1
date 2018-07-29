import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Pagination extends Component {
  render() {
    const { quantityPage, currentPage, onPageChange } = this.props;
    let pageNumbers = [];
    for (let i = 1; i <= quantityPage; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={number === currentPage ? 'page-item active' : 'page-item'}
          key={number}
          id={number}
          onClick={() => onPageChange(number)}
        >
          <a className="page-link">{number}</a>
        </li>
      );
    });
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 paginate">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item" onClick={() => onPageChange(1)}>
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">PreviousFirst</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() =>
                onPageChange(currentPage === 1 ? 1 : currentPage - 1)
              }
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&lsaquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            {renderPageNumbers}
            <li
              className="page-item"
              onClick={() =>
                onPageChange(currentPage === 4 ? 4 : currentPage + 1)
              }
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&rsaquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => onPageChange(quantityPage)}
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">NextLast</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = ({ tasks }) => ({ currentPage: tasks.currentPage });
const mapDispatchToProps = dispatch => ({
  onPageChange: numberPage => dispatch(actions.pagination(numberPage)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
