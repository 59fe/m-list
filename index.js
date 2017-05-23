'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Li = exports.List = undefined;

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('prop-types');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    List.prototype.render = function render() {
        var props = this.props;
        var listCls = (0, _classnames2.default)('list-block', {
            "media-list": this.props.type == 'media'
        }),
            spaceStyle = {
            marginTop: props.top,
            marginBottom: props.bottom
        };
        return _react2.default.createElement(
            'div',
            { className: listCls, style: spaceStyle },
            props.title && _react2.default.createElement(
                'h4',
                null,
                props.title
            ),
            _react2.default.createElement(
                'ul',
                null,
                props.children
            )
        );
    };

    return List;
}(_react2.default.Component);

List.propTypes = {
    type: _react.PropTypes.oneOf([undefined, 'media']),
    title: _react.PropTypes.string,
    top: _react.PropTypes.string,
    bottom: _react.PropTypes.string
};

var Li = function (_React$Component2) {
    _inherits(Li, _React$Component2);

    function Li() {
        _classCallCheck(this, Li);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    Li.prototype.render = function render() {
        var props = this.props,
            suffix = props.suffix;

        var itemInnerJsx = null,
            itemTitleJsx = _react2.default.createElement(
            'div',
            { className: 'item-title' },
            props.children
        ),
            itemInnerCls = (0, _classnames2.default)('item-inner', {
            'noarrow': props.noarrow
        });

        // 是否有副标题，subtitle这个参数决定行内容是单行还是多行
        if (!props.subtitle) {
            itemInnerJsx = _react2.default.createElement(
                'div',
                { className: itemInnerCls },
                itemTitleJsx,
                suffix && _react2.default.createElement(
                    'div',
                    { className: 'item-after' },
                    suffix
                ),
                props.subtitle && _react2.default.createElement(
                    'div',
                    { className: 'item-subtitle' },
                    props.subtitle
                ),
                props.detail && _react2.default.createElement(
                    'div',
                    { className: 'item-text' },
                    props.detail
                )
            );
        } else {
            itemInnerJsx = _react2.default.createElement(
                'div',
                { className: itemInnerCls },
                _react2.default.createElement(
                    'div',
                    { className: 'item-title-row' },
                    itemTitleJsx,
                    suffix && _react2.default.createElement(
                        'div',
                        { className: 'item-after' },
                        suffix
                    )
                ),
                props.subtitle && _react2.default.createElement(
                    'div',
                    { className: 'item-subtitle' },
                    props.subtitle
                ),
                props.detail && _react2.default.createElement(
                    'div',
                    { className: 'item-text' },
                    props.detail
                )
            );
        }

        var itemContentCls = (0, _classnames2.default)('item-content', props.className, {
            "oneline": !props.subtitle
        });
        var itemContentJsx = _react2.default.createElement(
            'li',
            { className: itemContentCls, onClick: props.onClick },
            props.img && _react2.default.createElement(
                'div',
                { className: 'item-media' },
                _react2.default.createElement('img', { src: props.img })
            ),
            itemInnerJsx
        );
        if (props.href) {
            itemContentCls = (0, _classnames2.default)(itemContentCls, 'item-link');
            itemContentJsx = _react2.default.createElement(
                'li',
                { onClick: props.onClick },
                _react2.default.createElement(
                    'a',
                    { href: props.href, className: itemContentCls },
                    props.img && _react2.default.createElement(
                        'div',
                        { className: 'item-media' },
                        _react2.default.createElement('img', { src: props.img })
                    ),
                    itemInnerJsx
                )
            );
        }

        return itemContentJsx;
    };

    return Li;
}(_react2.default.Component);

Li.propTypes = {
    suffix:    _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.string]),
    subtitle:  _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.string]),
    detail:    _PropTypes2.default.oneOfType([_PropTypes2.default.element, _PropTypes2.default.string]),
    img:       _PropTypes2.default.string,
    href:      _PropTypes2.default.string,
    onClick:   _PropTypes2.default.func
};
Li.defaultProps = {
    onClick: function onClick() {}
};
exports.List = List;
exports.Li = Li;
