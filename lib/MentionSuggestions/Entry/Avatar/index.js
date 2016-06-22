'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var mention = _ref.mention;
  var _ref$theme = _ref.theme;
  var theme = _ref$theme === undefined ? {} : _ref$theme;

  if (mention.has('avatar')) {
    var style = theme.mentionSuggestionsEntryAvatar;
    if (mention.has('userType')) {
      style = mention.get('userType') + ' ' + style;
    }

    return _react2.default.createElement('img', {
      src: mention.get('avatar'),
      className: style,
      role: 'presentation'
    });
  }

  return _react2.default.createElement('noscript', null);
};

exports.default = Avatar;