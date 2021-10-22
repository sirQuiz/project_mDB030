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

const changeDOM = {
    deleteElements: (elements) => {
        const elementsToDelete = document.querySelectorAll(`${elements}`);

        elementsToDelete.forEach((item) => {
            item.remove();
        });
    },
    changeText: (element, text) => {
        const elementToChangeText = document.querySelector(`${element}`);

        elementToChangeText.textContent = text;
    },
    changeBG: (element, image) => {
        const elementToChangeBG = document.querySelector(`${element}`);
    
        elementToChangeBG.style.backgroundImage = image;
    },
    changeList: (parent, list) => {
        const elementToChangeList = document.querySelector(`${parent}`),
              oldListElements = elementToChangeList.querySelectorAll('li');              
              
              oldListElements.forEach((child) => {
                child.remove();
              });

              let sortedList = list.sort();

              for(let i = 0; i < sortedList.length; i++) {
                let number = 0;

                if(i >= 10 ){
                    number = i;
                } else {
                    number = `0${i}`;
                }

                elementToChangeList.innerHTML += `
                    <li class="promo__interactive-item">
                        <span>${number}</span>
                        ${sortedList[i]}
                        <div class="delete"></div>
                    </li>`;                  
              }
    },
};

changeDOM.deleteElements('.promo__adv > img');
changeDOM.changeText(".promo__genre", "драма");
changeDOM.changeBG(".promo__bg", "url(../img/bg.jpg)");
changeDOM.changeList(".promo__interactive-list", movieDB.movies);
