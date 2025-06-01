Ext.define('ProductManagerApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller',

    onProductsClick: function () {
        const tabs = this.lookupReference('mainTabs');

        const tabId = 'products-tab-' + Ext.id();

        tabs.add({
            xtype: 'productsgrid',
            title: 'Товары',
            itemId: tabId,
            closable: true,
        }).show();
    },

    onLogoutClick: function () {
        this.getView().destroy();
        Ext.create('ProductManagerApp.view.login.Login');
    }
});
