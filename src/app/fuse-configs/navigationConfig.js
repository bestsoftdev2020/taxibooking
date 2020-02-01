const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'driverdisplay-component',
                'title': 'Choferes',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/driverdisplay'
            },
            {
                'id'   : 'booking-component',
                'title': 'Reservas',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/booking'
            }
        ]
    }
];

export default navigationConfig;
