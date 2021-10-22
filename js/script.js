/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteElements = (elements) => {
    const elementsToDelete = document.querySelectorAll(`${elements}`);

    elementsToDelete.forEach((item) => {
        item.remove();
    });
};

deleteElements('.promo__adv > img');

const changeText = (element, text) => {
    const elementToChangeText = document.querySelector(`${element}`);

    elementToChangeText.textContent = text;
};

changeText(".promo__genre", "драма");

const changeBG = (element, image) => {
    const elementToChangeBG = document.querySelector(`${element}`);

    elementToChangeBG.style.backgroundImage = image;
};

changeBG(".promo__bg", "url(../img/bg.jpg)");