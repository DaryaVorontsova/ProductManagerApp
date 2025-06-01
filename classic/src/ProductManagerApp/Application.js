Ext.define('ProductManagerApp.Application', {
    extend: 'Ext.app.Application',

    name: 'ProductManagerApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires: [
        'ProductManagerApp.view.login.Login'
    ],

    launch: function () {
        Ext.create('ProductManagerApp.view.login.Login');
    }
});
