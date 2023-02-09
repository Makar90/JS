Перевірити версії ПЗ:
    node -v:
        v18.12.1
    (встановити якщо нема)
    npm -v:
        8.19.2
    (встановити якщо нема)

Встановлюэмо Gulp
Gulp туторіал:
        https://gulpjs.com/docs/en/getting-started/quick-start
        Також webPack

1: npn init 
    vs
    npm init -y
    у папці де проект. В данному випадку - Lesson40
    (ls - current directory content/ cd directory - chanche to needed directory)
    У папці має зявитись package.json

2: npm install --global gulp-cli // глобально встановлюэмо gulp
    gulp -v перевірка версії gulp
    
    Можлива помилка:
        PS E:\Beetroot\PRJ\JS\Lesson40> gulp -v
            gulp : Невозможно загрузить файл C:\Users\Игорь\AppData\Roaming\npm\gulp.ps1, так как выполнение сценариев отключено в этой системе. Для получения       
            дополнительных сведений см. about_Execution_Policies по адресу https:/go.microsoft.com/fwlink/?LinkID=135170.
            строка:1 знак:1
            + gulp -v
            + ~~~~
                + CategoryInfo          : Ошибка безопасности: (:) [], PSSecurityException
                + FullyQualifiedErrorId : UnauthorizedAccess
        Як обійти
            chocolatey.org/install:
            Запустити PowerShall адміністратор (права кнопка на Пуск)
            Get-ExecutionPolicy
            Set-ExecutionPolicy RemoteSigned  /повернути- Set-ExecutionPolicy AllSigned

3: npm install --save-dev gulp
    зявляться:
        node_modules - тут багато файлів і на мак загнкться iCloud і це не треба пушити на GiT (потрібно створити Git Ignore)
        package-lock.json

4: створити Git Ignore
    .gitignore - новий файл в корневій папці проекту
    додати в файл запис
        /node_modules/*
    зберегти

5: створити в папці проекту файл: gulpfile.js
    додати код і зберегти 
        function defaultTask(cb) {
        // place code for your default task here
        cb();
        }
        exports.default = defaultTask   
    написати в терміналі команду 
        gulp

6: створюємо в корны проекту папки:
    src (тут пишемо код) 
    dist (сюди вын буде компылюватись)

7Ж дописуємо функції в gulpfile.js