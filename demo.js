import React from 'react';
import ReactDOM from 'react-dom';

import {List, Li} from '../src/index';
import Badge from '@ali/badge-m';

let onTapHandle = () => {
  console.log('onTap回调执行')
}

ReactDOM.render(<div>
<List title="单行列表">
    <Li>普通列表项</Li>
    <Li onTap={onTapHandle}>console查看点击事件</Li>
    <Li href="/">链接&lt;Li href="xx"&gt;&lt;/Li&gt;</Li>
    <Li href="/" suffix="设置">带有后缀文案</Li>
    <Li href="/" suffix=<Badge>14</Badge>>suffix参数可以是JSX</Li>
    <Li href="/" suffix=<Badge/>>比如suffix=&lt;Badge&gt; </Li>
    <Li img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg">左侧图片&lt;Li img="xx"&gt;&lt;/Li&gt;</Li>
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg">左侧带有图片</Li>
</List>
<List top="50px" bottom="40px">
    <Li>List容器不加title属性，带有上下间距</Li>
    <Li>&lt;List top="50px" bottom="40px"&gt;</Li>
</List>
<List top="50px" bottom="40px">
    <Li suffix=<Badge>23</Badge>>List容器不加title属性，带有上下间距</Li>
    <Li suffix=<Badge/>>&lt;List top="50px" bottom="40px"&gt;</Li>
</List>



<List title="两行列表" type="media">
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案">图片双行列表项</Li>
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案">图片双行列表项</Li>
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案">图片双行列表项</Li>
    <Li href="/" subtitle="子标题补充说明文案">图片双行列表项</Li>
    <Li href="/" subtitle="子标题补充说明文案">图片双行列表项</Li>
</List>

<List title="多行列表" type="media">
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案" detail="详细内容简介，详细内容简介，">图片双行列表项</Li>
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案" detail="详细内容简介，详细内容简介详细内容简介，详细内容简介，，详细内容简介，详细内容简介，">图片双行列表项</Li>
    <Li href="/" img="https://img.alicdn.com/tps/TB1fdTHIFXXXXbfXpXXXXXXXXXX.jpg" subtitle="子标题补充说明文案" detail="详细内容简介，详细内容简介，">图片双行列表项</Li>
    <Li href="/" subtitle="子标题补充说明文案" detail="详细内容简介，详细内容简介详细内容简介，详细内容简介，，详细内容简介，详细内容简介，">图片双行列表项</Li>
    <Li href="/" subtitle="子标题补充说明文案" detail="详细内容简介，详细内容简介，">图片双行列表项</Li>
    <Li href="/" subtitle="子标题补充说明文案" detail="详详细内容简介，详细内容简介详细内容简介细内容简介，详细内容简介详细内容简介，详细内容简介，，详细内容简介，详细内容简介，">图片双行列表项</Li>
</List>
<hr/>
</div>, document.getElementById('container'));



