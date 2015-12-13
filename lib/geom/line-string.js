"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var ol = _interopRequire(require("openlayers"));

var OLComponent = _interopRequire(require("../ol-component"));

var LineString = (function (_OLComponent) {
  function LineString(props) {
    _classCallCheck(this, LineString);

    _get(Object.getPrototypeOf(LineString.prototype), "constructor", this).call(this, props);
    this.geometry = new ol.geom.LineString();
    this.updateFromProps(props);
  }

  _inherits(LineString, _OLComponent);

  _createClass(LineString, {
    updateFromProps: {
      value: function updateFromProps(props) {
        this.geometry.setCoordinates(this.props.children);
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.context.feature.setGeometry(this.geometry);
      }
    },
    componentWillReceiveProps: {
      value: function componentWillReceiveProps(newProps) {
        this.updateFromProps(newProps);
      }
    }
  });

  return LineString;
})(OLComponent);

module.exports = LineString;

LineString.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)).isRequired };

LineString.contextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
};