import React, {memo, useEffect, useRef} from 'react';
import {throttle} from 'lodash';
import {setDraggableAttribute, setStyleCursor} from '../../utils';

const Drag = props => {
  const {children} = props;
  const DragContainerRef = useRef(null);

  const dragCb = throttle(() => {
    console.log('dragging');
  }, 100);

  // 给包裹dom设置拖拽特性
  useEffect(() => {
    const {current: DragContainerDom} = DragContainerRef;
    setDraggableAttribute(DragContainerDom);
    setStyleCursor(DragContainerDom);
  });

  const getTarget = (node, DragContainerDom) => {
    if (node.parentNode === DragContainerDom) {
        return node;
    }
    getTarget(node.parentNode, DragContainerDom);
  }

  useEffect(() => {
    const {current: DragContainerDom} = DragContainerRef;
    let sourceNode; // 当前拖动的是哪个元素

    DragContainerDom.addEventListener('dragstart', (e) => {
        setTimeout(() => {
            e.target.classList.add('moving');
        });
        sourceNode = e.target;
        e.dataTransfer.effectAllowed = 'move';
     }, true)

    DragContainerDom.addEventListener('dragenter', (e) => {
       
       if(e.target === DragContainerDom || e.target === sourceNode) {
        return;
       } 
       const children = Array.from(DragContainerDom.children);
       const sourceIndex = children.indexOf(sourceNode);
       const targetIndex = children.indexOf(e.target);
       if (sourceIndex < targetIndex) {
        console.log('向下拖动');
        DragContainerDom.insertBefore(sourceNode, e.target.nextElementSibling);
       } 
       else {
        DragContainerDom.insertBefore(sourceNode, e.target);
        console.log('向上拖动');
       }
    }, true)

    DragContainerDom.addEventListener('dragover', (e) => {
        e.preventDefault();
     }, true)


     DragContainerDom.addEventListener('dragend', (e) => {
        e.preventDefault();
        e.target.classList.remove('moving');
     }, true)
      
  });

    return (
        <div ref={DragContainerRef}>
            {children}
        </div>
    );
};

export default memo(Drag);