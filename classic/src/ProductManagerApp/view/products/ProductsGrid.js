var defaultProductsData = [
    {
        id: 1,
        name: 'Notebook Lenovo',
        description: 'Ноутбук ThinkPad T460 14"FHD',
        price: 100,
        quantity: 2
    },
    {
        id: 2,
        name: 'Keyboard OKLICK',
        description: 'Клавиатура OKLICK 140M, USB',
        price: 50,
        quantity: 8
    },
    {
        id: 3,
        name: 'Network adapter',
        description: 'Сетевой адаптер WiFi D-Link',
        price: 7,
        quantity: 0
    }
];

Ext.define('ProductManagerApp.view.products.ProductsGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'productsgrid',

    requires: [
        'ProductManagerApp.store.ProductsStore',
        'ProductManagerApp.view.products.ProductCard',
        'ProductManagerApp.view.products.ProductCardController'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    padding: 10,

    items: [
        {
            xtype: 'panel',
            html: '<h3 style="background-color: #29ABE2; color: white; padding: 10px; margin: 0;">Список товаров</h3>',
            border: false,
            margin: '0 0 10 0'
        },
        {
            xtype: 'form',
            layout: {
                type: 'vbox',
                align: 'start'
            },
            margin: '0 0 10 0',
            defaults: {
                xtype: 'textfield',
                labelWidth: 80,
                width: 300,
                enableKeyEvents: true,
                margin: '0 0 10 0',
                listeners: {
                    specialkey: function (field, e) {
                        if (e.getKey() === e.ENTER) {
                            const grid   = field.up('productsgrid').down('grid');
                            const idVal   = field.up('form').down('[name=idFilter]').getValue();
                            const descVal = field.up('form').down('[name=descFilter]').getValue();

                            grid.getStore().clearFilter();
                            const filters = [];
                            if (idVal)   filters.push({ property: 'id',          value: idVal });
                            if (descVal) filters.push({ property: 'description', value: descVal, anyMatch: true });
                            grid.getStore().addFilter(filters);
                        }
                    }
                }
            },
            items: [
                {
                    name: 'idFilter',
                    fieldLabel: 'ID',
                    emptyText: 'Введите фильтр…'
                },
                {
                    name: 'descFilter',
                    fieldLabel: 'Описание',
                    emptyText: 'Введите фильтр…'
                }
            ]
        },
        {
            xtype: 'grid',
            flex: 1,

            store: Ext.create('ProductManagerApp.store.ProductsStore', {
                data: Ext.decode(Ext.encode(defaultProductsData))
            }),

            columns: [
                { text: 'ID', dataIndex: 'id', width: 50 },
                { text: 'Имя', dataIndex: 'name', flex: 1 },
                { text: 'Описание', dataIndex: 'description', flex: 2 },
                { text: 'Цена', dataIndex: 'price', flex: 1 },
                {
                    text: 'Кол-во',
                    dataIndex: 'quantity',
                    flex: 1,
                    renderer: function (value) {
                        if (value === 0) {
                            return '<div style="background-color: red; color: white; text-align: left; padding-left:4px;">'
                                 + value + '</div>';
                        }
                        return value;
                    }
                }
            ],

            listeners: {
                cellclick: function (view, td, cellIndex, record) {
                    const column = view.panel.getColumnManager().getHeaderAtIndex(cellIndex);
                    if (column.dataIndex === 'name') {
                        const win = Ext.widget('productcard', {
                            title: `Карточка товара: ${record.get('name')}`,
                            record: record,
                            parentStore: view.getStore()
                        });
                        win.show();
                        win.down('form').getForm().setValues(record.getData());
                    }
                }
            },

            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                listeners: {
                    beforerender: function(tb) {
                        tb.bindStore(tb.up('grid').getStore());
                    }
                }
            }
        }
    ]
});
