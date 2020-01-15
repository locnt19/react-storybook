import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import check from '../../assets/images/check.png';
import checkDone from '../../assets/images/check-complete.png';

import './TodoItem.css';

class TodoItem extends Component {
  render() {

    const { item, onItemClicked } = this.props;
    let url = check;
    if (item.isComplete) {
      url = checkDone;
    }
    return (
      <div className={classNames('todo-item', {
        'todo-item__done': item.isComplete
      })}>
        <img src={url} witdh={32} height={32} alt="check"
          className="check"
          onClick={onItemClicked} />
        <span>{item.title}</span>
      </div>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
  }).isRequired,
  /** Call function: { this.onItemClicked(item) } */
  onItemClicked: PropTypes.func
};

export default TodoItem;