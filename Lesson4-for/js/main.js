console.log('Main JS commited');

function checkNum(a) {
    if (a == '' || Number.isInteger(+a) == false) {
        console.log(false);
        return false;
    } else
        return true;
    /* let condition = `a == '' || Number.isInteger(+a) == false`;
    eval(condition) ? return false : return true; */
}