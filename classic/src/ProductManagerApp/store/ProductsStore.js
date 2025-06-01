Ext.define('ProductManagerApp.store.ProductsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.productsstore',

    fields: ['id', 'name', 'description', 'price', 'quantity'],

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json'
        }
    },

    pageSize: 10,
    autoLoad: false
});
