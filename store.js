/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-10 00:04:03
 */
import {createStore} from 'redux';

import {reducer} from '@/reducer/index.js';

export const store = createStore(reducer);
