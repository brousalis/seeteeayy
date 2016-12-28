import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <div className="select">
        <select {...this.props}>
          {this.props.children}
        </select>
        <div className="select__arrow"></div>
      </div>
    )
  }
}

export default Select;
