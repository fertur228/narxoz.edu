// Получение элементов из DOM
const unitInput = document.getElementById("unit-input");
const unitSelect = document.getElementById("unit-select");
const convertButton = document.getElementById("convert");
const conversionResult = document.getElementById("conversion-result");


convertButton.addEventListener("click", () => {
    const value = parseFloat(unitInput.value);
    const conversionType = unitSelect.value;
    let result; 

    
    if (isNaN(value)) {
    alert("Ошибка: Введите корректное число."); 
    console.log("Введено некорректное значение: ", unitInput.value); 
    conversionResult.textContent = "Введите корректное число.";
    return;
}

    // Выполнение конверсии
    switch (conversionType) {
        
        case "c-to-f":
            result = (value * 9 / 5) + 32;
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)}°F`;
            break;
        case "f-to-c":
            result = (value - 32) * 5 / 9;
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)}°C`;
            break;
        case "c-to-k":
            result = value + 273.15;
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)} К`;
            break;
        case "k-to-c":
            result = value - 273.15;
            conversionResult.textContent = `${value} К = ${result.toFixed(2)}°C`;
            break;
        case "f-to-k":
            result = (value - 32) * 5 / 9 + 273.15;
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)} К`;
            break;
        case "k-to-f":
            result = (value - 273.15) * 9 / 5 + 32;
            conversionResult.textContent = `${value} К = ${result.toFixed(2)}°F`;
            break;

        // Расстояние
        case "km-to-mi":
            result = value * 0.621371;
            conversionResult.textContent = `${value} км = ${result.toFixed(2)} миль`;
            break;
        case "mi-to-km":
            result = value / 0.621371;
            conversionResult.textContent = `${value} миль = ${result.toFixed(2)} км`;
            break;
        case "m-to-ft":
            result = value * 3.28084;
            conversionResult.textContent = `${value} м = ${result.toFixed(2)} футов`;
            break;
        case "ft-to-m":
            result = value / 3.28084;
            conversionResult.textContent = `${value} футов = ${result.toFixed(2)} м`;
            break;
        case "cm-to-in":
            result = value / 2.54;
            conversionResult.textContent = `${value} см = ${result.toFixed(2)} дюймов`;
            break;
        case "in-to-cm":
            result = value * 2.54;
            conversionResult.textContent = `${value} дюймов = ${result.toFixed(2)} см`;
            break;

        // Энергия
        case "j-to-cal":
            result = value / 4.184;
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} калорий`;
            break;
        case "cal-to-j":
            result = value * 4.184;
            conversionResult.textContent = `${value} калорий = ${result.toFixed(2)} Дж`;
            break;
        case "kcal-to-j":
            result = value * 4184;
            conversionResult.textContent = `${value} ккал = ${result.toFixed(2)} Дж`;
            break;
        case "j-to-kcal":
            result = value / 4184;
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} ккал`;
            break;
        case "kwh-to-j":
            result = value * 3600000;
            conversionResult.textContent = `${value} кВт·ч = ${result.toFixed(2)} Дж`;
            break;
        case "j-to-kwh":
            result = value / 3600000;
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} кВт·ч`;
            break;

        
        case "liters-to-gallons":
            result = value * 0.264172;
            conversionResult.textContent = `${value} литров = ${result.toFixed(2)} галлонов`;
            break;
        case "gallons-to-liters":
            result = value / 0.264172;
            conversionResult.textContent = `${value} галлонов = ${result.toFixed(2)} литров`;
            break;
        case "ml-to-oz":
            result = value * 0.033814;
            conversionResult.textContent = `${value} мл = ${result.toFixed(2)} унций`;
            break;
        case "oz-to-ml":
            result = value / 0.033814;
            conversionResult.textContent = `${value} унций = ${result.toFixed(2)} мл`;
            break;
        case "cups-to-ml":
            result = value * 236.588;
            conversionResult.textContent = `${value} чашек = ${result.toFixed(2)} мл`;
            break;
        case "ml-to-cups":
            result = value / 236.588;
            conversionResult.textContent = `${value} мл = ${result.toFixed(2)} чашек`;
            break;
        case "pints-to-liters":
            result = value * 0.473176;
            conversionResult.textContent = `${value} пинт = ${result.toFixed(2)} литров`;
            break;
        case "liters-to-pints":
            result = value / 0.473176;
            conversionResult.textContent = `${value} литров = ${result.toFixed(2)} пинт`;
            break;

        // Объем информации
        case "b-to-kb":
            result = value / 1024;
            conversionResult.textContent = `${value} бит = ${result.toFixed(2)} КБ`;
            break;
        case "kb-to-b":
            result = value * 1024;
            conversionResult.textContent = `${value} КБ = ${result.toFixed(2)} бит`;
            break;
        case "kb-to-mb":
            result = value / 1024;
            conversionResult.textContent = `${value} КБ = ${result.toFixed(2)} МБ`;
            break;
        case "mb-to-kb":
            result = value * 1024;
            conversionResult.textContent = `${value} МБ = ${result.toFixed(2)} КБ`;
            break;
        case "mb-to-gb":
            result = value / 1024;
            conversionResult.textContent = `${value} МБ = ${result.toFixed(2)} ГБ`;
            break;
        case "gb-to-mb":
            result = value * 1024;
            conversionResult.textContent = `${value} ГБ = ${result.toFixed(2)} МБ`;
            break;
        case "gb-to-tb":
            result = value / 1024;
            conversionResult.textContent = `${value} ГБ = ${result.toFixed(2)} ТБ`;
            break;
        case "tb-to-gb":
            result = value * 1024;
            conversionResult.textContent = `${value} ТБ = ${result.toFixed(2)} ГБ`;
            break;
        case "mps-to-kph":
            result = value * 3.6; 
            conversionResult.textContent = `${value} м/с = ${result.toFixed(2)} км/ч`;
            break;
        case "kph-to-mps":
            result = value / 3.6; 
            conversionResult.textContent = `${value} км/ч = ${result.toFixed(2)} м/с`;
            break;
        case "kph-to-mph":
            result = value / 1.609; 
            conversionResult.textContent = `${value} км/ч = ${result.toFixed(2)} миль/ч`;
            break;
        case "mph-to-kph":
            result = value * 1.609; 
            conversionResult.textContent = `${value} миль/ч = ${result.toFixed(2)} км/ч`;
            break;
        case "mps-to-mph":
            result = value * 2.237; 
            conversionResult.textContent = `${value} м/с = ${result.toFixed(2)} миль/ч`;
            break;
        case "mph-to-mps":
            result = value / 2.237; 
            conversionResult.textContent = `${value} миль/ч = ${result.toFixed(2)} м/с`;
            break;

        default:
        alert("Ошибка: Неверный тип конверсии.");
        console.log("Попытка использовать неизвестный тип конверсии: ", conversionType); // Лог в консоли
        conversionResult.textContent = "Неверный тип конверсии.";
    }

    if (result !== undefined) {
    console.log(`Конверсия выполнена успешно: ${value} (${conversionType}) = ${result.toFixed(2)}`);
}
});
