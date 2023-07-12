# Визуализация набора данных в виде графа

Проект представляет собой вебстраницу с графом куска цепи питания в животном мире. Звенья можно удалять, а также смотреть персональные карточки на отдельной странице.

<img src="https://github.com/prokopievp/graph-visualization/raw/main/readme_image/sec.png"/>
<br/>
<br/>
Основой проекта являются Django, Postgres, React, Reagraph (рендеринг графа через WebGL). 
<br/>
<br/>

Сами данные инициализируются из `/db_init/dataset/*`.

## Запуск

*Необходимо наличие установленных docker, docker-compose и git*
```
git clone https://github.com/prokopievp/graph-visualization

cd graph-visualization

docker-compose up
```

После установки, открываем `http://localhost/3000`.
