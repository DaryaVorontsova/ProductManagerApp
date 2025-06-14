# Product Manager App

Простое одностраничное приложение на Ext JS для отображения и редактирования списка товаров.
Доступно по ссылке: [https://goodsapp.netlify.app/](https://goodsapp.netlify.app/)

## Установка и запуск

### Требования:

- Node.js (если используется npm для dev-сервера)
- [Sencha Cmd](https://www.sencha.com/products/sencha-cmd/) (например, версия 6.7+)
- Ext JS SDK (скачивается отдельно, если нет GPL версии — можно использовать trial)

### Как запустить:

1. Установите Sencha Cmd и проверьте команду:
  ```bash
   sencha
  ```

2. Скачайте Ext JS SDK (пример: ext-7.6.0)
Распакуйте в соседнюю папку, например:
  ```bash
  ../ext-7.6.0
  ```

3. Скачайте проект:
  ```bash
  git clone https://github.com/DaryaVorontsova/ProductManagerApp.git
  cd ProductManagerApp
  ```

4. Запустите проект:
  ```bash
  sencha app watch -sdk ../ext-7.6.0
  ```

Приложение будет доступно по адресу:
👉 [http://localhost:1841](http://localhost:1841) (или указанному в терминале)

### Возможности:

- Просмотр списка товаров
- Фильтрация по ID и описанию (без использования gridfilters)
- Открытие карточки товара с редактированием по нажатию на поле "Имя"
- Валидация формы редактирования
