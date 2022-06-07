<img src="https://user-images.githubusercontent.com/61308457/169072830-1eb3fd0e-cb12-40b1-bf33-87334492fb8c.svg" />

<div align="center">
  <img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-202124?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.JS-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-464646?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#routes">Маршруты</a>
  •
  <a href="#install">Установка</a>
  
</h3>

<h4 align=center>Сервис по поиску фильмов с возможностью сохранять понравившиеся в личном кабинете.
</h4>

<h3 align="center">
  <a href="#" title="Link">Demo<ruby>&nbsp;<rt>Скоро</rt></ruby></a> 
  •
  <a href="#">GitHubPages<ruby>&nbsp;<rt>Скоро</rt></ruby></a>
  •
  <a href="https://github.com/deniloss/movies-explorer-frontend">Frontend</a>
</h3>
<br>
<h1 id="about">О проекте</h1>
<table>
  <tbody>
    <tr>
      <td>
        <p><b>Выполнен в качестве дипломной работы в рамках курса Веб-разработки от Яндекс.Практикум. </b><p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Проект представляет собой сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Работа над проектом включала 5 этапов: составление плана, работу над <a href="https://github.com/deniloss/movies-explorer-api">бэкендом</a>, вёрстку, добавление функциональности и финальные доработки.</p>
        &nbsp;&nbsp;&nbsp;&nbsp;У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
      </td>
    </tr>
  </tbody>
</table>

<h1 id="techs">Технологии</h1>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>JavaScript</li>
  <li>MongoDB</li>
  <li>nginx</li>
  <li>REST API</li>
  <li>JWT</li>
  <li>LocalStorge</li>
  <li>Cookie</li>
</ul>
<h1 id="functionality">Функциональность</h1>
<ul>
  <li>Поиск фильмов по названию с фильтрацией по длительности;</li>
  <li>Сохранение/удаление понравившихся фильмов;</li>
  <li>Регистрация/авторизация пользователей;</li>
  <li>Редактирование профиля;</li>
  <li>Валидация форм, как на стороне клиента, так и сервера;</li>
  <li>Отзывчивая верстка, адаптированная под различные разрешения экрана;</li>
  <li>Защита роутов авторизацией;</li>
  <li>Ограничение числа запросов  с одного IP в единицу времени;</li>
  <li>Бережное хранение паролей в виде хэша;</li>
  <li>Идетентификация по JWT через httpOnly Cookie;</li>
  <li>Централизованная обработка ошибок.</li>
</ul>
<h1 id="routes">Маршруты</h1>
<table>
  <thead>
    <tr>
      <th>Метод</th>
      <th>Маршрут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/users/me</code></td>
      <td>возвращает информацию о пользователе (email и имя)</td>
    </tr>
    <tr>
      <td><code>PATCH</code></td>
      <td><code>/users/me</code></td>
      <td>обновляет информацию о пользователе</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/movies</code></td>
      <td>все сохранённые пользователем фильмы</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/movies</code></td>
      <td>создаёт фильм с переданными в теле данными</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td><code>/movies/movieId</code></td>
      <td>удаляет сохранённый фильмы по _id</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/signup</code></td>
      <td>создаёт пользователя с переданными в теле данными</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/signin</code></td>
      <td>возвращает JWT, если в теле запроса переданы правильные почта и пароль</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/signout</code></td>
      <td>удаляет JWT из cookie</td>
    </tr>
  </tbody>
</table>
<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем (например dev):</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/deniloss/movies-explorer-api.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>movies-explorer-api</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd movies-explorer-api
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
npm install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
  <ul>
    <li>
      <p>Запуск сервера:</p>
<pre>
npm run start
</pre>
    </li>
        <li>
      <p>Запуск сервера с hot-reload:</p>
<pre>
npm run dev
</pre>
    </li>
  </ul>
</li>
</ol>

Ссылка на проект - <a>movie-explorer-api.nomoreparties.sbs</a>
