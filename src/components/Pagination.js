import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { quantityPage, currentPage, onClick } = this.props;
    let pageNumbers = [];
    for (let i = 1; i <= quantityPage; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page-item"
          key={number}
          id={number}
          onClick={() => onClick && onClick(number)}
        >
          <a className="page-link">{number}</a>
        </li>
      );
    });
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 paginate">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item" onClick={() => onClick && onClick(1)}>
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">PreviousFirst</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => onClick && onClick(currentPage - 1)}
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&lsaquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            {renderPageNumbers}
            <li
              className="page-item"
              onClick={() => onClick && onClick(currentPage + 1)}
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&rsaquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
            <li
              className="page-item"
              onClick={() => onClick && onClick(quantityPage)}
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
export default Pagination;
