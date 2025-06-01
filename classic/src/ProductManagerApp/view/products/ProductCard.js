Ext.define('ProductManagerApp.view.products.ProductCard', {
    extend: 'Ext.window.Window',
    xtype: 'productcard',
    title: 'Карточка товара',
    modal: true,
    width: 400,
    layout: 'fit',

    controller: 'productcardcontroller',

    items: [{
        xtype: 'form',
        reference: 'productForm',
        bodyPadding: 10,
        defaults: {
            labelWidth: 100,
            anchor: '100%'
        },
        items: [
            {
                xtype: 'displayfield',
                name: 'id',
                fieldLabel: 'ID'
            },
            {
                xtype: 'displayfield',
                name: 'name',
                fieldLabel: 'Наименование'
            },
            {
                xtype: 'numberfield',
                name: 'price',
                fieldLabel: 'Цена',
                minValue: 0,
                allowDecimals: true,
                decimalPrecision: 2,
                step: 0.01,
                allowBlank: false,    
                blankText: 'Цена не может быть пустой',
                msgTarget: 'under', 
                validator: function(value) {
                    var num = parseFloat(value);
                    if (isNaN(num) || num < 0) {
                        return 'Цена должна быть неотрицательным числом';
                    }
                    return true;
                }
            },
            {
                xtype: 'numberfield',
                name: 'quantity',
                fieldLabel: 'Кол-во',
                minValue: 0,
                allowDecimals: false, 
                allowBlank: false,
                blankText: 'Количество не может быть пустым',
                msgTarget: 'under',
                validator: function(value) {
                    var num = parseInt(value, 10);
                    if (isNaN(num) || num < 0) {
                        return 'Количество должно быть неотрицательным целым';
                    }
                    return true;
                }
            }
        ]
    }],

    bbar: {
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items: [
            {
                text: 'Сохранить',
                handler: function (btn) {
                    var win  = btn.up('window');
                    var ctrl = win.getController();
                    ctrl.onSaveClick();
                }
            },
            {
                text: 'Отмена',
                handler: function (btn) {
                    btn.up('window').close();
                }
            }
        ]
    }
});
