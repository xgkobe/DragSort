import React, {useRef, useState} from 'react';
import CanvasShowImg from './canvasShowImg';
import './index.less';

const ImageTool = props => {
    const imageUpload = useRef(null);
    const [showImg, setShowImg] = useState(false);
    const [imgs, setImg] = useState();

    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        filesInfo(files[0]).then((v) => {
            console.log(files[0]);
        })
        if (!files.length) {
            console.log('重复率');
            // 释放上传系统存储当前值，避免相同文件不触发onchange事件
            imageUpload.current.value = null; 
            return;
        }
    }

    // 读取图片原始信息方法
    const filesInfo = (file) => {
        return new Promise((res, rej) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                // 实例一个Image对象，为了获取宽、高（下文预览图片时需要）
                let image = new Image(); 
                image.onload = function() {
                    console.dir(image);
                    setShowImg(true);
                    setImg(image);
                    res({
                        width: image.width, // 宽
                        height: image.height, // 高
                        // 其他图片信息
                        // ...
                    });
                };
                image.src = e.target.result; // base64
                // image.src = window.URL.createObjectURL(file)
                image.crossOrigin = 'Anonymous'; //解决跨域问题
            };
        });
    }


    return (
        <div>
            <input
                type="file"
                onChange={handleChange} // 监听上传事件
                multiple // 是否批量上传
                accept="image/*" // 控制上传文件的类型，image/*表示接收所有image后缀的文件
                ref={imageUpload}
            />
            {showImg &&(
                <div className="canvas-contianer" >
                    <CanvasShowImg image={imgs} />
                </div>
            )}
             
        </div>
    );
}

export default ImageTool;
