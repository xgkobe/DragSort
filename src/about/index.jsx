/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-09 23:06:47
 */
import React, { useState } from "react";
import { Button } from "antd";
import Drag from './components/Drag';
import './style.less';

const divArray = [0,1,2,3,4,5,6];

function About () {

    const [age, setAge] = useState('21');

    const addAge = () => {
        setAge(age + 1);
    }

    return (
        <>
            <Drag>
                {divArray.map(index => 
                    (
                    <div className='sort-div' key={index}>
                        {index}
                        <div draggable={false}>21</div>
                        <div draggable={false}>21</div>
                    </div>
                    ))
                }   
            </Drag>
            <Button onClick={addAge}>点击{age}</Button>
        </>
    )
}

export default About;