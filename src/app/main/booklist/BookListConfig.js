import {FuseLoadable} from '@fuse';

export const BookListConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/booking',
            component: FuseLoadable({
                loader: () => import('./BookList')
            })
        }
    ]
};
