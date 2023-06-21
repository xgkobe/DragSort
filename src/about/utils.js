// 给子dom元素加上draggable
export const setDraggableAttribute = (DragContainerDom) => {
    DragContainerDom?.childNodes.forEach(item => item.setAttribute('draggable', true))
}

// 给子dom元素加上cursor
export const setStyleCursor = (DragContainerDom) => {
    DragContainerDom?.childNodes.forEach(item => item.style.cursor = 'grab')
}