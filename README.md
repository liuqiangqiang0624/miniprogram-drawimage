# drawimage
在小程序中渲染分享图片

### useage
```html
<drawimage id="drawimage" height="400" background="{{bgimg}}" layers="{{layers}}" />
```
```js
this.selectComponent('#drawimage').toTempFilePath().then((path) => {
    console.log(path);
});
```

### options

```js
width: {
    type: Number,
    value: 750
},
height: {
    type: Number,
    value: 500
},
layers: {
    type: Array,
    value: [
        {
            type: 'text',   // 文本
            textBaseline: 'top',
            textAlign: 'left',
            fontSize: 16,
            text: '',
            x: 0,
            y: 0,
            color: '#000',
            lineHeight: 50,
            maxWidth: width,
        },
        {
            type: 'color',  // 颜色
            start,          // Array [x0, y0, x1, y1]
            end,            // Array [x, y, width, height]
            colorStop,      // Array [stop, color]
            shape: 'Linear' // Linear || Circular
        },
        {
            type: 'image',  // 图片
            imageResource,
            dx: 0,
            dy: 0,
            dWidth: width,
            dHeight: height
        },
    ]
},
background: {
    type: Object,
    value: {
        imageResource,
        dx: 0,
        dy: 0,
        dWidth: width,
        dHeight: height,
        color: {
            start,          // Array [x0, y0, x1, y1]
            end,            // Array [x, y, width, height]
            colorStop,      // Array [stop, color]
            shape: 'Linear' // Linear || Circular
        }
    }
}
```

