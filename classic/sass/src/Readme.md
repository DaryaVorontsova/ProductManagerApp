### ./sass/src

This folder contains Sass files defining CSS rules corresponding to classes
included in the application's JavaScript code build when using the classic toolkit.
By default, files in this folder are mapped to the application's root namespace, 'ProductManagerApp'.
This is set in `"app.json"`:

    "sass": {
        "namespace": "ProductManagerApp"
    }