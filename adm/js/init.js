/* 
 * Основной JS-код
 */

//Неймспейс для всего нашего javascript функционала
var ADM = {
	utils: {}, //Набор утилит для различных проверок и преобразований
	UI: {}, //Основной неймспейс для осуществления взаимодействия с пользователем
	settings: {}, //Неймспейс для начальных настроек и отслеживания текущего состояния приложения
	init: {	// Инициализация логики
		common: function() {},	// Общая для всех страниц логика
		page: function() {},	// Индивидуальная логика страницы
		modal: function() {}	// Логика моадльного окна
	}
};

//Запуск функции инициализации по завершению загрузки страницы
$(document).ready(function() {
	ADM.init.common();
	ADM.init.page();
});