import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {RegisterConfig} from 'app/main/register/RegisterConfig';
import {LogoutConfig} from 'app/main/logout/LogoutConfig';
import {ContactConfig} from 'app/main/contact/ContactConfig';
import {FirstpageConfig} from 'app/main/firstpage/FirstpageConfig';
import {BookTripConfig} from 'app/main/booktrip/BookTripConfig';
import {DriverDisplayConfig} from 'app/main/driverdisplay/DriverDisplayConfig';
import {DriverEditConfig} from 'app/main/driveredit/DriverEditConfig';
import {DriverAddConfig} from 'app/main/driveradd/DriverAddConfig';
import {BookListConfig} from 'app/main/booklist/BookListConfig';

const routeConfigs = [
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    ContactConfig,
    DriverDisplayConfig,
    DriverEditConfig,
    DriverAddConfig,
    BookListConfig,
    BookTripConfig,
    FirstpageConfig,
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/firstpage"/>
    }
];

 export default routes;
