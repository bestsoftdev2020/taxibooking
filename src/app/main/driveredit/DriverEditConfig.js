import {FuseLoadable} from '@fuse';

export const DriverEditConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/driveredit',
            component: FuseLoadable({
                loader: () => import('./DriverEdit')
            })
        }
    ]
};
