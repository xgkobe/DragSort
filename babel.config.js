/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-02 15:14:00
 */
module.exports = {
    'presets': [
        '@babel/preset-react',
    ],
    plugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'lodash',
                libraryDirectory: '',
                camel2DashComponentName: true,
            },
            'lodash',
        ],
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                "libraryDirectory": "lib",
                style: false,
            },
            'antd',
        ]
    ]
};