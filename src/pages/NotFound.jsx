import React from 'react';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
            <Layout title={'Page not Found'}>
                <div style={{textAlign:'center',height:'40vh'}}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            </div>
            </Layout>
    );
};

export default NotFound;
