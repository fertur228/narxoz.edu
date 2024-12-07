// Получение элементов из DOM
const unitInput = document.getElementById("unit-input");
const unitSelect = document.getElementById("unit-select");
const convertButton = document.getElementById("convert");
const conversionResult = document.getElementById("conversion-result");
const conversionFormula = document.getElementById("conversion-formula"); // Получаем элемент из HTML



convertButton.addEventListener("click", () => {
    const value = parseFloat(unitInput.value);
    const conversionType = unitSelect.value;
    let result; 
    let formula = "";

    
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
            formula = "°F = (°C × 9/5) + 32"; // Формула преобразования из Цельсия в Фаренгейт
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)}°F`;
            break;

        case "f-to-c":
            result = (value - 32) * 5 / 9;
            formula = "°C = (°F - 32) × 5/9"; // Формула преобразования из Фаренгейта в Цельсий
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)}°C`;
            break;

        case "c-to-k":
            result = value + 273.15;
            formula = "K = °C + 273.15"; // Формула преобразования из Цельсия в Кельвин
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)} K`;
            break;

        case "k-to-c":
            result = value - 273.15;
            formula = "°C = K - 273.15"; // Формула преобразования из Кельвина в Цельсий
            conversionResult.textContent = `${value} K = ${result.toFixed(2)}°C`;
            break;

        case "f-to-k":
            result = (value - 32) * 5 / 9 + 273.15;
            formula = "K = (°F - 32) × 5/9 + 273.15"; // Формула преобразования из Фаренгейта в Кельвин
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)} K`;
            break;

        case "k-to-f":
            result = (value - 273.15) * 9 / 5 + 32;
            formula = "°F = (K - 273.15) × 9/5 + 32"; // Формула преобразования из Кельвина в Фаренгейт
            conversionResult.textContent = `${value} K = ${result.toFixed(2)}°F`;
            break;


        // Расстояние
        case "km-to-mi":
            result = value * 0.621371;
            formula = "Мили = Км × 0.621371"; // Формула преобразования из километров в мили
            conversionResult.textContent = `${value} км = ${result.toFixed(2)} миль`;
            break;

        case "mi-to-km":
            result = value / 0.621371;
            formula = "Км = Мили / 0.621371"; // Формула преобразования из миль в километры
            conversionResult.textContent = `${value} миль = ${result.toFixed(2)} км`;
            break;

        case "m-to-ft":
            result = value * 3.28084;
            formula = "Футы = Метры × 3.28084"; // Формула преобразования из метров в футы
            conversionResult.textContent = `${value} м = ${result.toFixed(2)} футов`;
            break;

        case "ft-to-m":
            result = value / 3.28084;
            formula = "Метры = Футы / 3.28084"; // Формула преобразования из футов в метры
            conversionResult.textContent = `${value} футов = ${result.toFixed(2)} м`;
            break;

        case "cm-to-in":
            result = value / 2.54;
            formula = "Дюймы = См / 2.54"; // Формула преобразования из сантиметров в дюймы
            conversionResult.textContent = `${value} см = ${result.toFixed(2)} дюймов`;
            break;

        case "in-to-cm":
            result = value * 2.54;
            formula = "См = Дюймы × 2.54"; // Формула преобразования из дюймов в сантиметры
            conversionResult.textContent = `${value} дюймов = ${result.toFixed(2)} см`;
            break;


        // Энергия
        case "j-to-cal":
            result = value / 4.184;
            formula = "Кал = Дж / 4.184"; // Формула преобразования из джоулей в калории
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} калорий`;
            break;

        case "cal-to-j":
            result = value * 4.184;
            formula = "Дж = Кал × 4.184"; // Формула преобразования из калорий в джоули
            conversionResult.textContent = `${value} калорий = ${result.toFixed(2)} Дж`;
            break;

        case "kcal-to-j":
            result = value * 4184;
            formula = "Дж = Ккал × 4184"; // Формула преобразования из килокалорий в джоули
            conversionResult.textContent = `${value} ккал = ${result.toFixed(2)} Дж`;
            break;

        case "j-to-kcal":
            result = value / 4184;
            formula = "Ккал = Дж / 4184"; // Формула преобразования из джоулей в килокалории
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} ккал`;
            break;

        case "kwh-to-j":
            result = value * 3600000;
            formula = "Дж = КВт·ч × 3600000"; // Формула преобразования из киловатт-часов в джоули
            conversionResult.textContent = `${value} кВт·ч = ${result.toFixed(2)} Дж`;
            break;

        case "j-to-kwh":
            result = value / 3600000;
            formula = "КВт·ч = Дж / 3600000"; // Формула преобразования из джоулей в киловатт-часы
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} кВт·ч`;
            break;


        
        case "liters-to-gallons":
            result = value * 0.264172;
            formula = "Галлоны = Литры × 0.264172"; // Формула преобразования из литров в галлоны
            conversionResult.textContent = `${value} литров = ${result.toFixed(2)} галлонов`;
            break;

        case "gallons-to-liters":
            result = value / 0.264172;
            formula = "Литры = Галлоны / 0.264172"; // Формула преобразования из галлонов в литры
            conversionResult.textContent = `${value} галлонов = ${result.toFixed(2)} литров`;
            break;

        case "ml-to-oz":
            result = value * 0.033814;
            formula = "Унции = Мл × 0.033814"; // Формула преобразования из миллилитров в унции
            conversionResult.textContent = `${value} мл = ${result.toFixed(2)} унций`;
            break;

        case "oz-to-ml":
            result = value / 0.033814;
            formula = "Мл = Унции / 0.033814"; // Формула преобразования из унций в миллилитры
            conversionResult.textContent = `${value} унций = ${result.toFixed(2)} мл`;
            break;

        case "cups-to-ml":
            result = value * 236.588;
            formula = "Мл = Чашки × 236.588"; // Формула преобразования из чашек в миллилитры
            conversionResult.textContent = `${value} чашек = ${result.toFixed(2)} мл`;
            break;

        case "ml-to-cups":
            result = value / 236.588;
            formula = "Чашки = Мл / 236.588"; // Формула преобразования из миллилитров в чашки
            conversionResult.textContent = `${value} мл = ${result.toFixed(2)} чашек`;
            break;

        case "pints-to-liters":
            result = value * 0.473176;
            formula = "Литры = Пинты × 0.473176"; // Формула преобразования из пинт в литры
            conversionResult.textContent = `${value} пинт = ${result.toFixed(2)} литров`;
            break;

        case "liters-to-pints":
            result = value / 0.473176;
            formula = "Пинты = Литры / 0.473176"; // Формула преобразования из литров в пинты
            conversionResult.textContent = `${value} литров = ${result.toFixed(2)} пинт`;
            break;


        // Объем информации
        case "b-to-kb":
            result = value / 1024;
            formula = "КБ = Биты / 1024"; // Формула преобразования из бит в килобайты
            conversionResult.textContent = `${value} бит = ${result.toFixed(2)} КБ`;
            break;

        case "kb-to-b":
            result = value * 1024;
            formula = "Биты = КБ × 1024"; // Формула преобразования из килобайтов в биты
            conversionResult.textContent = `${value} КБ = ${result.toFixed(2)} бит`;
            break;

        case "kb-to-mb":
            result = value / 1024;
            formula = "МБ = КБ / 1024"; // Формула преобразования из килобайтов в мегабайты
            conversionResult.textContent = `${value} КБ = ${result.toFixed(2)} МБ`;
            break;

        case "mb-to-kb":
            result = value * 1024;
            formula = "КБ = МБ × 1024"; // Формула преобразования из мегабайтов в килобайты
            conversionResult.textContent = `${value} МБ = ${result.toFixed(2)} КБ`;
            break;

        case "mb-to-gb":
            result = value / 1024;
            formula = "ГБ = МБ / 1024"; // Формула преобразования из мегабайтов в гигабайты
            conversionResult.textContent = `${value} МБ = ${result.toFixed(2)} ГБ`;
            break;

        case "gb-to-mb":
            result = value * 1024;
            formula = "МБ = ГБ × 1024"; // Формула преобразования из гигабайтов в мегабайты
            conversionResult.textContent = `${value} ГБ = ${result.toFixed(2)} МБ`;
            break;

        case "gb-to-tb":
            result = value / 1024;
            formula = "ТБ = ГБ / 1024"; // Формула преобразования из гигабайтов в терабайты
            conversionResult.textContent = `${value} ГБ = ${result.toFixed(2)} ТБ`;
            break;

        case "tb-to-gb":
            result = value * 1024;
            formula = "ГБ = ТБ × 1024"; // Формула преобразования из терабайтов в гигабайты
            conversionResult.textContent = `${value} ТБ = ${result.toFixed(2)} ГБ`;
            break;

        // Скорость
        case "mps-to-kph":
            result = value * 3.6;
            formula = "Км/ч = М/с × 3.6"; // Формула преобразования из метров в секунду в километры в час
            conversionResult.textContent = `${value} м/с = ${result.toFixed(2)} км/ч`;
            break;

        case "kph-to-mps":
            result = value / 3.6;
            formula = "М/с = Км/ч / 3.6"; // Формула преобразования из километров в час в метры в секунду
            conversionResult.textContent = `${value} км/ч = ${result.toFixed(2)} м/с`;
            break;

        case "kph-to-mph":
            result = value / 1.609;
            formula = "Миль/ч = Км/ч / 1.609"; // Формула преобразования из километров в час в мили в час
            conversionResult.textContent = `${value} км/ч = ${result.toFixed(2)} миль/ч`;
            break;

        case "mph-to-kph":
            result = value * 1.609;
            formula = "Км/ч = Миль/ч × 1.609"; // Формула преобразования из миль в час в километры в час
            conversionResult.textContent = `${value} миль/ч = ${result.toFixed(2)} км/ч`;
            break;

        case "mps-to-mph":
            result = value * 2.237;
            formula = "Миль/ч = М/с × 2.237"; // Формула преобразования из метров в секунду в мили в час
            conversionResult.textContent = `${value} м/с = ${result.toFixed(2)} миль/ч`;
            break;

        case "mph-to-mps":
            result = value / 2.237;
            formula = "М/с = Миль/ч / 2.237"; // Формула преобразования из миль в час в метры в секунду
            conversionResult.textContent = `${value} миль/ч = ${result.toFixed(2)} м/с`;
            break;


        default:
            alert("Ошибка: Неверный тип конверсии.");
            console.log("Попытка использовать неизвестный тип конверсии: ", conversionType);
            conversionResult.textContent = "Неверный тип конверсии.";
            conversionFormula.textContent = "";
            return;
    }

    if (formula) {
        conversionFormula.textContent = `Формула: ${formula}`;
    }

});
