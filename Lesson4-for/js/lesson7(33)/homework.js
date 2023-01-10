console.log('JS Pattern commited7');

//task NORMA
let car = {
    manufacturer: 'Ford',
    model: 'Focus',
    yearOfProduction: 2017,
    averageSpeed: 120,
    fuelTankVolume: 52,
    averageFuelConsumptionPer100Km: 4.1,
    drivers: ['Igor', 'Ksy'],
    getCarInfo: function (out) {
        return `ТЗ: 
    ${this.manufacturer}; 
    ${this.model}; 
    ${this.yearOfProduction} року випуску; 
    Середня швидкість-\t\t ${this.averageSpeed} км/год; 
    Об'єм паливного баку-\t ${this.fuelTankVolume} літрів; 
    Витрати палива на 100км-\t ${this.averageFuelConsumptionPer100Km};
    Водії-\t\t\t ${this.getAllDrivers()}`;
    },
    addDriver: function (newDriverName) {
        for (let i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i] == newDriverName) {
                console.log(this.drivers[i])
                return `Помилка!. Такий водій "${this.drivers[i]}" вже існує у списку водіїв`;
            }
        }
        this.drivers.push(newDriverName);
        return `Водія додано до списку водіїв`;

    },
    checkDriverInDriverList: function (driverName) {
        for (let i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i] == driverName) {
                return `${this.drivers[i]} - Водій є у переліку водіїв ТЗ`;
            }
        }
        return `${driverName} - Водія нема у переліку водіїв ТЗ`;
    },
    calcTimeAndFuelForWayWithAvgSpeed: function (distance) {
        let res = {
            time: (distance / this.averageSpeed),
            timeWithStops: function () {
                return Math.floor(this.time / 4) > 0 ? this.time + Math.floor(this.time / 4) : this.time;
            },
            fuel: (distance / 100 * this.averageFuelConsumptionPer100Km),
        }
        //console.log(`test`);
        //console.log(`${res.time} / ${res.timeWithStops()} / ${res.fuel}`);
        return res;
    },
    getAllDrivers: function () {
        let driversList = '';
        for (let i = 0; i < this.drivers.length; i++) {
            driversList += `${this.drivers[i]}, `;
        }
        return `${driversList};`;
    },
    gerCarObjectDescription: function () {
        return this;
    }
}

/*let condition1 = document.querySelector('.condition1');
condition1.innerHTML = car.gerCarObjectDescription;*/

//#1
let btnCarInfo = document.querySelector('.btnCarInfo');
btnCarInfo.onclick = () => {
    let outCarInfo = document.querySelector('.outCarInfo');
    outCarInfo.innerHTML = car.getCarInfo();
}

//#2
let btnAddDriver = document.querySelector('.btnAddDriver');
btnAddDriver.onclick = () => {
    let inpAddDriver = document.querySelector('.inpAddDriver');
    let outAddDriver = document.querySelector('.outAddDriver');
    if (inpAddDriver.value != '') {
        outAddDriver.innerHTML = car.addDriver(inpAddDriver.value);
    } else {
        outAddDriver.innerHTML = `Помилка!. Поле має бути заповнене`;
    }
}

//#3
let btnCheckDriver = document.querySelector('.btnCheckDriver');
btnCheckDriver.onclick = () => {
    let inpCheckDriver = document.querySelector('.inpCheckDriver');
    let outCheckDriver = document.querySelector('.outCheckDriver');
    if (inpCheckDriver.value != '') {
        outCheckDriver.innerHTML = car.checkDriverInDriverList(inpCheckDriver.value);
    } else {
        outCheckDriver.innerHTML = `Помилка!. Поле має бути заповнене`;
    }
}

//#4
let btnCalcTimeAndFuel = document.querySelector('.btnCalcTimeAndFuel');
btnCalcTimeAndFuel.onclick = () => {
    let inpCalcTimeAndFuel = document.querySelector('.inpCalcTimeAndFuel');
    let outCalcTimeAndFuel = document.querySelector('.outCalcTimeAndFuel');
    if (inpCalcTimeAndFuel.value != '') {
        let time = car.calcTimeAndFuelForWayWithAvgSpeed(inpCalcTimeAndFuel.value).time;
        let timeWithStops = car.calcTimeAndFuelForWayWithAvgSpeed(inpCalcTimeAndFuel.value).timeWithStops();
        let fuel = car.calcTimeAndFuelForWayWithAvgSpeed(inpCalcTimeAndFuel.value).fuel;
        outCalcTimeAndFuel.innerHTML = `
                                        <p>Час: ${parseFloat(time).toFixed(2)} (годин)</p>
                                        <p>Час з вимушеними зупинками кожні 4 години: ${parseFloat(timeWithStops).toFixed(2)} (годин)</p>
                                        <p>Об\`єм палива: ${parseFloat(fuel).toFixed(2)} (літрів)</p>
                                        `;
    } else {
        outCalcTimeAndFuel.innerHTML = `Помилка!. Поле має бути заповнене`;
    }
}


//task NORMA
let time = {
    hh: 1,
    mm: 2,
    ss: 3,
    getTime: function () {
        return `${this.getFormatTimePart(this.hh)}:${this.getFormatTimePart(this.mm)}:${this.getFormatTimePart(this.ss)}`;
    },
    changeTimeSS: function (seconds) {
        seconds = +seconds + this.ss;
        let minutes = Math.floor(seconds / 60);
        if (minutes > 0) {
            if (this.changeTimeMM(minutes)) {
                seconds = seconds % 60;
            } else {
                return false;
            }
        }
        this.ss = seconds;
        return true;
    },
    changeTimeMM: function (minutes) {
        minutes = +minutes + this.mm;
        let hours = Math.floor(minutes / 60);
        if (hours > 0) {
            if (this.changeTimeHH(hours)) {
                minutes = minutes % 60;
            } else {
                return false;
            }
        }
        this.mm = minutes;
        return true;
    },
    changeTimeHH: function (hours) {
        hours = +hours + this.hh;
        let days = Math.floor(hours / 24);
        if (days > 0) {
            return false;
        }
        this.hh = hours;
        return true;
    },
    getFormatTimePart: function (timePart) {
        return `${timePart < 10 ? '0' + timePart : timePart}`;
    }
}
/*let condition1 = document.querySelector('.condition1');
condition1.innerHTML = car.gerCarObjectDescription;*/

//#1
let btnShowTime = document.querySelector('.btnShowTime');
btnShowTime.onclick = () => {
    let outShowTime = document.querySelector('.outShowTime');
    outShowTime.innerHTML = time.getTime();
}

//#2
let btnChangeTimeSS = document.querySelector('.btnChangeTimeSS');
btnChangeTimeSS.onclick = () => {
    let inpChangeTimeSS = document.querySelector('.inpChangeTimeSS');
    let outChangeTimeSS = document.querySelector('.outChangeTimeSS');
    if (inpChangeTimeSS.value == '') {
        outChangeTimeSS.innerHTML = `Помилка!.Значення не введене`;
        return false;
    }
    if (time.changeTimeSS(inpChangeTimeSS.value)) {
        outChangeTimeSS.innerHTML = time.getTime();
    } else {
        outChangeTimeSS.innerHTML = `Помилка!.Ведене значення більше однієї доби`;
    }
}

//#3
let btnChangeTimeMM = document.querySelector('.btnChangeTimeMM');
btnChangeTimeMM.onclick = () => {
    let inpChangeTimeMM = document.querySelector('.inpChangeTimeMM');
    let outChangeTimeMM = document.querySelector('.outChangeTimeMM');
    if (inpChangeTimeMM.value == '') {
        outChangeTimeMM.innerHTML = `Помилка!.Значення не введене`;
        return false;
    }
    if (time.changeTimeMM(inpChangeTimeMM.value)) {
        outChangeTimeMM.innerHTML = time.getTime();
    } else {
        outChangeTimeMM.innerHTML = `Помилка!.Ведене значення більше однієї доби`;
    }
}

//#4
let btnChangeTimeHH = document.querySelector('.btnChangeTimeHH');
btnChangeTimeHH.onclick = () => {
    let inpChangeTimeHH = document.querySelector('.inpChangeTimeHH');
    let outChangeTimeHH = document.querySelector('.outChangeTimeHH');
    if (inpChangeTimeHH.value == '') {
        outChangeTimeMM.innerHTML = `Помилка!.Значення не введене`;
        return false;
    }
    if (time.changeTimeHH(inpChangeTimeHH.value)) {
        outChangeTimeHH.innerHTML = time.getTime();
    } else {
        outChangeTimeHH.innerHTML = `Помилка!.Ведене значення більше однієї доби`;
    }
}



