function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask



//-------------
const { src, dist, parallel, watch } = reqiure('gulp');
const saas = require('gulp-saas')(require('saas'));

//gulpsoursemap -щоб бачити в інспекторі браузеру звідки (файл) який код
//let soursemap=require()

//gulp-clean-css - компресія css. Потрібен на режимі продакшену

//Режим продакшену та девелопменту тут же можна зробити режим нечитаємого коду
//gulp-mode

//gulp prefix


function style() {
    return src('./src/style/main.scss') // src('./src/style/*.scss') -читатиме всі файли scss а не тільки main
        //.pipe(soursemap.init());
        //.pipe(mode)    
        .pipe(saas().on('error', saas.logError)) //-
        .pipe(dest('/dist/'))
}


//читати файли html в проекті
function html() {
    return src('./src/**/*.html').pipe(dest('./dist/'));
}

//потрібно щоб при кожній зміні відпрацьовував gulp(запуск інсталяції проекту) та інсталював проект у dist
function watchAll() {
    watch('./src/style/**/*.scss', style);
    watch('./src/**/*.html', html);
}

//зробити функцію для картинок
//зробити функцію для js
//створити функцію для очистки Наприклад додали сторінку а потім видаляємо її і вона також має видалитись в Dist - видаляти папку dist кожного разу перед запуском

exports.default = parallel(html, style, watchAll)
//exports.dev = parallel(html, style, watchAll);
//exports.build = parallel(html, style);