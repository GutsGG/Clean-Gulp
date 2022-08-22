import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; //Проверка обновления картинки
import ifPlugin from "gulp-if";
import sourcemaps from "gulp-sourcemaps";


export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	sourcemaps: sourcemaps,
	if: ifPlugin
}