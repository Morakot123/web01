import React from 'react';
import ReactDOM from 'react-dom/client';

import {UserCard} from './UserCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserCard username="Tae" email="chaloemphon.sir@dou.ac.th" />
    <UserList />
    );