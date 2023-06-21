import React, {useEffect, useRef} from 'react';
import {getPixelRatio} from '../utils';
import "./index.less";

const CanvasShowImg = props => {

    const {image} = props;

    const canvasRef = useRef(null);

    useEffect(() => {
        drawImage(props.image);
    }, [image])

    const drawImage = image => {
        // 设置默认canvas元素大小
  	    const canvasDefaultSize = 300;
        const canvasRefCurrent = canvasRef.current;
        const canvasDom = canvasRefCurrent.getContext('2d');
        const ratio = getPixelRatio(canvasDom);
        // 清除画布
        canvasDom.clearRect(0, 0, canvasRefCurrent.width, canvasRefCurrent.height);

        let proportion = image.width / image.height,
      	scale = proportion > 1 ? canvasDefaultSize / image.width : canvasDefaultSize / image.height,
        canvasWidth = image.width * scale * ratio,
        canvasHeight = image.height * scale * ratio;
        canvasRefCurrent.width = canvasWidth;
        canvasRefCurrent.height = canvasHeight;
        canvasRefCurrent.style.width = canvasWidth / ratio + 'px';
        canvasRefCurrent.style.height = canvasHeight / ratio + 'px';
        // canvasDom.drawImage(image, 0, 0, canvasRefCurrent.width, canvasRefCurrent.height);
        // canvasRefCurrent.toBlob(blob => {
        //     const file = new File([blob], '图片.jpg', { type: blob.type })
        //     console.log(file);
        // })
    }

    return (
        <div className='modal-trim'>
            <canvas
                ref={canvasRef}
                width={300}
                height={300}
            />
        </div>
    )
}

export default CanvasShowImg;