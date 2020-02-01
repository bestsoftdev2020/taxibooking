import {FuseLoadable} from '@fuse';

export const DriverAddConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/driveradd',
            component: FuseLoadable({
                loader: () => import('./DriverAdd')
            })
        }
    ]
};
