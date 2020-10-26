import React, { FC } from 'react';
import Sidebar from 'app/layout/sidebar';
import Main from 'app/layout/main';

const App: FC = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <Main />
        </div>
    );
};

export default App;
