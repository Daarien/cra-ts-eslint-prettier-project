import React, { Component, ChangeEvent, MouseEvent, CSSProperties } from 'react';

interface State {
  value: string;
  isFocused: boolean;
  isHovered: boolean;
}

export default class ClassComp extends Component<{}, State> {
  state = {
    value: '',
    isFocused: false,
    isHovered: false
  };

  options = ['a', 'ab', 'abc'];

  style: Record<string, CSSProperties> = {
    container: { display: 'flex', justifyContent: 'center' },
    column: { flexBasis: 300 },
    li: { cursor: 'pointer' }
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => {
    if (!this.state.isHovered) {
      this.setState({ isFocused: false });
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: event.target.value });

  handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.textContent;
    if (value) {
      this.setState({ value, isFocused: false, isHovered: false });
    }
  };

  setHover = (state: boolean) => (event: MouseEvent) => {
    event.stopPropagation();
    this.setState({ isHovered: state });
  };

  render() {
    return (
      <div style={this.style.container}>
        <div style={this.style.column}>
          <h1>Text Field</h1>
          <p>
            <input
              value={this.state.value}
              onFocus={this.handleFocus}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </p>
          <p>Text Field Value: {this.state.value}</p>
        </div>
        <div style={{ ...this.style.column, display: 'flex' }}>
          {this.state.isFocused ? (
            <ul
              style={{ display: 'inline-block' }}
              onMouseEnter={this.setHover(true)}
              onMouseLeave={this.setHover(false)}
            >
              {this.options
                .filter(option => {
                  if (this.state.value) {
                    return option.includes(this.state.value);
                  }
                  return option;
                })
                .map(option => (
                  <li key={option} onClick={this.handleItemClick} style={this.style.li}>
                    {option}
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
