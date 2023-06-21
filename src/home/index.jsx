/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-05 23:24:58
 */
import React, {useEffect, useRef} from 'react';
import ImgTrimUpload from '../imgTrimUpload';

function Home() {
    const editor = useRef(null);

    
    return (
        <>
            <ImgTrimUpload />
        </>
    )
}

export default Home;