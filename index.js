import React, {PropTypes} from 'react';
import classNames from 'classnames';

class List extends React.Component {
    render() {
        let props = this.props
        let listCls = classNames('list-block', {
                "media-list": this.props.type == 'media'
            }),
            spaceStyle = {
                marginTop: props.top,
                marginBottom: props.bottom
            }
        return (
            <div className={listCls} style={spaceStyle}>
                {props.title && <h4>{props.title}</h4>}
                <ul>
                    {props.children}
                </ul>
            </div>
        );
    }
}
List.propTypes = {
    type: PropTypes.oneOf([undefined, 'media']),
    title: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string
}


class Li extends React.Component {
    render() {
        const props = this.props,
            suffix = props.suffix

        let itemInnerJsx = null,
            itemTitleJsx = <div className="item-title">{props.children}</div>

        // 是否有副标题，subtitle这个参数决定行内容是单行还是多行
        if (!props.subtitle) {
            itemInnerJsx =
                <div className="item-inner">
                    {itemTitleJsx}
                    {suffix && <div className="item-after">{suffix}</div>}
                    {props.subtitle && <div className="item-subtitle">{props.subtitle}</div>}
                    {props.detail && <div className="item-text">{props.detail}</div>}
                </div>
        } else {
            itemInnerJsx =
                <div className="item-inner">
                    <div className="item-title-row">
                        {itemTitleJsx}
                        {suffix && <div className="item-after">{suffix}</div>}
                    </div>
                    {props.subtitle && <div className="item-subtitle">{props.subtitle}</div>}
                    {props.detail && <div className="item-text">{props.detail}</div>}
                </div>
        }

        let itemContentCls = classNames('item-content', {
            "oneline": !props.subtitle
        })
        let itemContentJsx =
            <li className={itemContentCls} onClick={props.onClick}>
                {props.img && <div className="item-media"><img src={props.img} /></div>}
                {itemInnerJsx}
            </li>
        if (props.href) {
            itemContentCls = classNames(itemContentCls, 'item-link')
            itemContentJsx =
                <li onClick={props.onClick}>
                    <a href={props.href} className={itemContentCls}>
                        {props.img && <div className="item-media"><img src={props.img} /></div>}
                        {itemInnerJsx}
                    </a>
                </li>
        }

        return (
            itemContentJsx
        );
    }
}

Li.propTypes = {
    suffix: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    subtitle: PropTypes.string,
    detail: PropTypes.string,
    img: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
}
Li.defaultProps = {
    onClick: () => {}
};
export {List, Li};
