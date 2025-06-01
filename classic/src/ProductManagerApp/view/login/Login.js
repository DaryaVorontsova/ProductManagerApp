Ext.define('ProductManagerApp.view.login.Login', {
    extend: 'Ext.container.Viewport',
    xtype: 'loginwindow',
    controller: 'logincontroller',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype: 'form',
            width: 300,
            reference: 'loginForm',
            bodyPadding: 10,
            frame: true,
            title: 'Авторизация',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%',
                allowBlank: false,
                labelWidth: 70
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Логин',
                    emptyText: 'Введите логин',
                    inputId: 'username-field'
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Пароль',
                    inputType: 'password',
                    emptyText: 'Введите пароль',
                    inputId: 'password-field'
                },
                {
                    xtype: 'displayfield',
                    reference: 'errorMsg',
                    hidden: true,
                    value: '',
                    fieldStyle: 'color: red; font-style: italic;',
                    hideEmptyLabel: false
                }
            ],
            buttons: [
                {
                    text: 'Войти',
                    formBind: true,
                    handler: 'onLoginClick'
                }
            ]
        }
    ]
});
