# Визуализация набора данных в виде графа

Проект представляет собой вебстраницу с графом куска цепи питания в животном мире. Звенья можно удалять, а также смотреть персональные карточки на отдельной странице.

<img style={"height: 100;"} src="https://github.com/prokopievp/graph-visualisation/raw/master/readme_image/main.png"/>
<img style={'height: 100;'} src="https://github.com/prokopievp/graph-visualisation/raw/master/readme_image/sec.png"/>

Основой проекта являются Django, Postgres, React, Reagraph (рендеринг графа через WebGL). 

Сами данные инициализируются из `/db_init/dataset/*`.

## Запуск

*Необходимо наличие установленных docker, docker-compose и git*
```
git clone https://github.com/prokopievp/graph-visualisation

cd graph-visualisation

docker-compose up
```

После установки, открываем `http://localhost/3000`.
