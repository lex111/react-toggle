"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var check = _interopRequire(require("./check"));

var x = _interopRequire(require("./x"));

module.exports = React.createClass({
  displayName: "Toggle",

  propTypes: {
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      hasFocus: false
    };
  },

  handleClick: function handleClick(event) {
    var checkbox = this.refs.input.getDOMNode();
    if (event.target === checkbox) {
      return;
    }
    event.preventDefault();
    checkbox.click();
    checkbox.focus();
  },

  handleFocus: function handleFocus() {
    this.setState({ hasFocus: true });
  },

  handleBlur: function handleBlur() {
    this.setState({ hasFocus: false });
  },

  render: function render() {
    var classes = classNames("react-toggle", {
      "react-toggle--checked": this.props.checked,
      "react-toggle--focus": this.state.hasFocus
    });

    return React.createElement(
      "div",
      { className: classes, onClick: this.handleClick },
      React.createElement(
        "div",
        { className: "react-toggle-track" },
        React.createElement("div", { className: "react-toggle-track-check", dangerouslySetInnerHTML: { __html: check } }),
        React.createElement("div", { className: "react-toggle-track-x", dangerouslySetInnerHTML: { __html: x } })
      ),
      React.createElement("div", { className: "react-toggle-thumb" }),
      React.createElement("input", {
        name: this.props.name,
        value: this.props.value,
        ref: "input",
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        defaultChecked: this.props.checked,
        className: "screenreader-only",
        type: "checkbox",
        onChange: this.props.onChange })
    );
  }
});
