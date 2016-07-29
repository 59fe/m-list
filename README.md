# m-list

移动端react 列表组件

---

列表容器以一致的格式来显示一组相关的内容，为一致性的类型或者一组内容指定优先顺序来体现层次感以获取更好的可读性。    

列表瓦片可以包含多行的文本，并且文本的字数可以在同一列表的不同瓦片间有所不同。

## API


- 列表容器`<List>`的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置类型，目前只有默认类型和媒体类型，可选值为 `media`或者不设 | string | undefined
title | 设置列表头部标题 | string | ''
top | 设置列表区块是上间距,可选值为任意合法的css长度属性值,如'30px' | string | ''
bottom | 设置列表区块是下间距,可选值为任意合法的css长度属性值,如'30px' | string | ''

- 列表项`<Li>`的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
className | 为列表行的.item-content 元素追加css class类名 | string | ''
suffix | 设置列表行后缀信息 | string或element | undefined
subtitle | 设置列表第二子行内容 | string或element | undefined
detail | 设置列表第三、第四子行内容 | string或element | undefined
img | 设置列表行左侧图片的URL | string | undefined
href | 设置列表行点击后跳转的链接 | string | undefined
noarrow | 设置列表行右侧没有箭头 | boolean | undefined
onClick | 设置列表行点击后执行的回调函数 | function | noop

