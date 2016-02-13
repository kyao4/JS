/**
 * Created by K.Yao on 2016/2/12.
 */


module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {test:/\.css$/, loader: 'style.css'}
        ]
    }
}