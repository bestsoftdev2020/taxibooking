import {FuseLoadable} from '@fuse';

export const DriverDisplayConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/driverdisplay',
            component: FuseLoadable({
                loader: () => import('./DriverDisplay')
            })
        }
    ]
};
