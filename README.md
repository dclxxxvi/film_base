#База фильмов 

## Реализовать страницу для удобного отображения большой базы фильмов, используя популярный вебфреймворк: Vue, React или Angular.

Список фильмов в виде таблицы должен удовлетворять следующим требованиям:

1. Возможность сортировки и фильтрации по полям.
2. Возможность отображения и скрытия необходимых полей. Для отображения должны быть
доступны все поля из поля "data" в ответе.
3. В качестве критериев отбора для вывода списка как минимум должно быть отдельное текстовое
поле для поиска фильмов по фразе (для этого можно использовать свойство "search" в запросе).
4. Возможность постраничного отображения данных (пагинация), а так же возможность
отображения всей базы фильмов на одной странице.

Учесть, что объём принимаемых данных может быть до 44 Мб. Найти способ избежать подвисания
страницы при отображении полного списка.

## Запрос данных доступен через следующее API:

### Запрос

```javascript
Uri: http://185.185.69.80:8082/list
Method: POST
Content-Type: application/json
Data: {
  "page": номер страницы, начиная счёт с 0, по умолчанию 0,
  "page_size": число записей на странице,
  "sort_field": по какому полю сортировать: "imdb_id", "budget", "original_language", "popularity",
"release_date", "revenue", "runtime", "status", "vote_average" или "vote_count",
  "sort_order": направление сортировки: "asc" или "desc", по умолчанию "asc",
  "imdb_id": "ID фильма для поиска только одного фильма",
  "ids": массив чисел ID из базы,
  "search": "строка поиска по фразе",
  "adult": фильм для взрослых true/false,
  "budget_min": целое число,
  "budget_max": целое число,
  "genres": массив строк с жанрами фильмов,
  "original_language": строка с названием языка, например "fr",
  "popularity_min": число с плавающей точкой,
  "popularity_max": число с плавающей точкой,
  "release_date_min": дата в формате YYYY-MM-DD,
  "release_date_max": дата в формате YYYY-MM-DD,
  "revenue_min": целое число,
  "revenue_max": целое число,
  "runtime_min": число с плавающей точкой,
  "runtime_max": число с плавающей точкой,
  "spoken_languages": массив строк с названиями языков,
  "status": "статус выхода фильма",
  "vote_average_min": число с плавающей точкой,
  "vote_average_max": число с плавающей точкой,
  "vote_count_min": целое число,
  "vote_count_max": целое число
}
```


### Ответ:

```javascript
{
  "ok": true,
  "data_size": количество фильмов после фильтрации,
  "data": [ {
    "id": ID фильма из базы,
    "adult": фильм для взрослых true/false,
    "belongs_to_collection": данные о принадлежности фильма к коллекции фильмов,
    "budget": бюджет фильма,
    "genres": список жанров фильма,
    "homepage": "страница фильма",
    "imdb_id": "ID фильма в базе IMDB",
    "original_language": "язык фильма",
    "original_title": "заголовок на родном языке",
    "overview": "краткое описание",
    "popularity": популярность фильма,
    "production_companies": список с информацией по киностудиям,
    "production_countries": список с информацией по странам,
    "release_date": "дата выхода",
    "revenue": доходы,
    "runtime": продолжительность,
    "spoken_languages": список с языками, представленными в фильме,
    "status": "статус выхода фильма",
    "tagline": "изречение",
    "title": "заголовок",
    "vote_average": средний рейтинг,
    "vote_count": количество голосов рейтинга
  }, ... ]
}
```
