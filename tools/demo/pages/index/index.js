
Page({
    data: {
        // background: {
        //     imageResource: '/images/1.jpg',
        // },
        layers: [
            { type: 'text', text: '联发科健康拉', y: 100, radius: 20 },
            // { type: 'text', text: 'hahbbbb2', y: 50 },
            // { type: 'text', text: 'hahccccccccccccc3', y: 100, },
            // { type: 'image', imageResource: '/images/2.jpg', dx: 200, dy: 100, dWidth: 100, dHeight: 100 },
            // { type: 'image', imageResource: '/images/2.jpg', dx: 100, dy: 200, dWidth: 100, dHeight: 100, radius: 100, },
            // { type: 'text', text: 'hahdddddddddddddd4', y: 150 },
            {
                type: 'text', 
                text: '联发科健康拉abadasfsdaf联发科健康拉联发科健康拉联发科健康拉联发科健康拉联发科健康拉联发科健康拉', 
                x: 100,
                y: 50,
                maxWidth: 200,
                padding: '5, 20, 5, 20',
                radius: 50,
                bgColor: '#ddd'
            },
        ],
    },
    onLoad() {
        console.log(wx.getSystemInfoSync());
    },

    download() {
        this.selectComponent('#drawimage').toTempFilePath().then((path) => {
            console.log(path);
            wx.previewImage({
                current: path, // 当前显示图片的http链接
                urls: [path] // 需要预览的图片http链接列表
            })
        });
    },
});