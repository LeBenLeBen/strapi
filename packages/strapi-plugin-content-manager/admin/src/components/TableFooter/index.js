/**
*
* TableFooter
*
*/

import React from 'react';

import LimitSelect from '../LimitSelect';
import Pagination from '../Pagination';

import styles from './styles.scss';

class TableFooter extends React.Component {
  render() {
    return (
      <div className={`row ${styles.tableFooter}`}>
        <div className="col-lg-6">
          <LimitSelect
            className="push-lg-right"
            onLimitChange={this.props.onLimitChange}
            limit={this.props.limit}
          />
        </div>
        <div className="col-lg-6">
          <Pagination
            limit={this.props.limit}
            currentPage={this.props.currentPage}
            changePage={this.props.changePage}
            count={this.props.count}
          />
        </div>
      </div>
    );
  }
}

TableFooter.propTypes = {
  changePage: React.PropTypes.func.isRequired,
  count: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool,
  ]).isRequired,
  currentPage: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number.isRequired,
  onLimitChange: React.PropTypes.func.isRequired,
};

export default TableFooter;
