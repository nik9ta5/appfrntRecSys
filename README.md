# Клиентская часть рекомендательной системы для предсказания диагноза по протоколу осмотра

## Ссылка на серверную часть приложения
https://github.com/nik9ta5/appserverRecSys/tree/main

## Требования для запуска
Перед запуском необходимо установить **npm**
https://nodejs.org/en/download/package-manager

## Запуск
Клонируйте репозиторий 

```
git clone https://github.com/nik9ta5/appfrntRecSys.git
```

Перейдите в директорию приложения

Выполните команду
```sh
npm run dev
```

Приложение будет запущено локально

После запуска, введите адрес ниже в поисковую строку браузера
```
http://localhost:5173/
```

## Описание интерфейса
На экране расположена форма ввода данных о пациенте. При нажатии кнопки "Отправить" формируется **POST** запрос на **запущенный** сервер в асинхронном режите.
Клиент получает ответ от сервера с ответом языковой модели — предполагаемый диагноз. Также указываются ближайшие диагнозы, по переданному описанию.
