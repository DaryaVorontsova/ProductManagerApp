Ext.define('ProductManagerApp.view.products.ProductCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productcardcontroller',

    onSaveClick: function () {
        var win = this.getView();
        var form = win.down('form').getForm();
        var record = win.record;
        var store = win.parentStore;

        if (!record || !store) {
            Ext.Msg.alert('Ошибка', 'Не найдена запись или store');
            return;
        }

        if (!form.isValid()) {
            Ext.Msg.alert('Ошибка', 'Пожалуйста, исправьте ошибки в форме перед сохранением.');
            return;
        }

        var values = form.getValues();
        record.set({
            price:    parseFloat(values.price),
            quantity: parseInt(values.quantity, 10)
        });

        var grid = Ext.ComponentQuery.query('productsgrid grid').find(function (g) {
            return g.getStore() === store;
        });
        if (grid) {
            var rowIndex = store.indexOf(record);
            grid.getView().refreshNode(rowIndex);
        }

        Ext.Msg.alert('Сохранено', 'Изменения сохранены!');
        win.close();
    }
});
