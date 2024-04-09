"use strict";

//1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const fromEl = document.querySelector("#from");

fromEl.addEventListener("input", (e) => {
  fromEl.nextElementSibling.innerHTML = e.target.value;
});

/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */

const messageBtnEl = document.querySelector("button.messageBtn");

messageBtnEl.addEventListener("click", (e) => {
  messageBtnEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageBtnEl.style.visibility = "visible";
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */

const formEl = document.querySelector("form");
const inputEl = formEl.querySelector("input.form-control");
const selectEl = formEl.querySelector("select");
const btn = formEl.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectEl.value === "") {
    selectEl.classList.add("error");
  } else {
    selectEl.classList.remove("error");
  }

  if (!inputEl.value) {
    inputEl.classList.add("error");
  } else {
    inputEl.classList.remove("error");
  }
});
