/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-09 23:58:38
 */
const initState = {
    value: '默认值'
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'send_type':
            return Object.assign({}, state, action);
        default:
            return state;
    }
}

