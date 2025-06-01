Ext.define('ProductManagerApp.view.main.MainWindow', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainwindow',

    requires: [
        'ProductManagerApp.view.main.MainController',
        'ProductManagerApp.view.products.ProductsGrid'
    ],

    controller: 'maincontroller',

    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: 10,
            style: 'background-color: #29ABE2; color: white;',
            items: [
                {
                    xtype: 'component',
                    html: '<h2 style="margin: 0;">Учет товаров</h2>',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'Товары',
                    margin: '0 10 0 0',
                    handler: 'onProductsClick'
                },
                {
                    xtype: 'button',
                    text: 'Выход',
                    handler: 'onLogoutClick'
                }
            ]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            reference: 'mainTabs',
            ariaLabel: 'Область вкладок',
            tabBar: {
                style: 'background-color: #333;',
                defaults: {
                    style: 'background-color: #444; color: white; font-weight: bold;'
                }
            },
            defaults: {
                bodyPadding: 10
            },
            items: []
        }
    ]
});
