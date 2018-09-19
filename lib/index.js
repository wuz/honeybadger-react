"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formatComponentStack = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// @flow
var formatComponentStack = function formatComponentStack(str) {
  var lines = str.split(/\s*\n\s*/g);
  var ret = "";

  for (var line = 0, len = lines.length; line < len; line++) {
    if (lines[line].length) ret += "".concat(ret.length ? "\n" : "").concat(lines[line]);
  }

  return ret;
};

exports.formatComponentStack = formatComponentStack;

var HoneybadgerReact =
/*#__PURE__*/
function (_Component) {
  _inherits(HoneybadgerReact, _Component);

  function HoneybadgerReact(props) {
    var _this;

    _classCallCheck(this, HoneybadgerReact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HoneybadgerReact).call(this, props));
    _this.state = {
      error: null,
      info: null
    };
    return _this;
  }

  _createClass(HoneybadgerReact, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error, info);
      var _this$props = this.props,
          client = _this$props.client,
          beforeNotify = _this$props.beforeNotify;
      if (beforeNotify) client.beforeNotify(beforeNotify);
      client.setContext(info);
      client.notify(error);
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var FallbackComponent = this.props.FallbackComponent;
      var error = this.state.error;

      if (error) {
        var _FallbackComponent = this.props.FallbackComponent;
        if (_FallbackComponent) return _react.default.createElement(_FallbackComponent, this.state);
        return null;
      }

      return this.props.children;
    }
  }]);

  return HoneybadgerReact;
}(_react.Component);

var _default = HoneybadgerReact;
exports.default = _default;