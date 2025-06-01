Ext.define('ProductManagerApp.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    init: function (view) {
        const form = view.down('form');

        form.down('textfield[name=username]').on('change', this.hideError, this);
        form.down('textfield[name=password]').on('change', this.hideError, this);
    },

    hideError: function () {
        const form = this.lookupReference('loginForm');
        const error = form.down('[reference=errorMsg]');
        error.setValue('');
        error.hide();
    },

    onLoginClick: function (btn) {
        const form = btn.up('form').getForm();
        const values = form.getValues();

        const username = values.username;
        const password = values.password;

        if (username === 'admin' && password === 'padmin') {
            this.getView().destroy();
            Ext.create('ProductManagerApp.view.main.MainWindow');
        } else {
            const formPanel = btn.up('form');

            formPanel.down('[reference=errorMsg]').setValue('Неверный логин или пароль.');
            formPanel.down('[reference=errorMsg]').show();
        }
    }
});
