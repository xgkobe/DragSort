/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-04-03 14:23:03
 */
import React, { Suspense } from 'react';
import {useRoutes} from 'react-router-dom';
import './app.less';
import routes from '@/config/router';
import Layout from './layout';

function App() {
    return (
        <Layout>
            <Suspense fallback={<>loading</>}>
                {useRoutes(routes)}
            </Suspense>
        </Layout>
    );
}

export default App;
