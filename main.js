// Получение элементов из DOM
const unitInput = document.getElementById("unit-input");
const unitSelect = document.getElementById("unit-select");
const convertButton = document.getElementById("convert");
const conversionResult = document.getElementById("conversion-result");
const conversionFormula = document.getElementById("conversion-formula"); // Получаем элемент из HTML
const factElement = document.getElementById("fact"); // Элемент для отображения факта


const facts = {
    "c-to-f": "Знаете ли вы, что самая высокая температура, зарегистрированная на Земле, составила 134°F (56.7°C) в Долине Смерти, Калифорния?",
    "f-to-c": "Знаете ли вы, что средняя температура тела человека составляет около 98.6°F (37°C)?",
    "c-to-k": "Знаете ли вы, что нулевая температура по Кельвину (-273.15°C) называется абсолютным нулем?",
    "k-to-c": "Знаете ли вы, что температура поверхности Солнца составляет около 5778 K?",
    "f-to-k": "Знаете ли вы, что космический микроволновый фон имеет температуру около 2.7 K?",
    "k-to-f": "Знаете ли вы, что температура поверхности Плутона опускается до примерно 44 K (-229°C)?",
    "km-to-mi": "Знаете ли вы, что длина экватора Земли составляет примерно 24,901 мили (40,075 км)?",
    "mi-to-km": "Знаете ли вы, что самая длинная автомагистраль в мире — Панамериканское шоссе, протяженностью более 19,000 миль (30,000 км)?",
    "m-to-ft": "Знаете ли вы, что высота Эйфелевой башни составляет 324 метра (1,063 фута)?",
    "ft-to-m": "Знаете ли вы, что самый высокий жилой дом в мире — Central Park Tower, достигает высоты 472 метра (1,550 футов)?",
    "cm-to-in": "Знаете ли вы, что стандартная высота баскетбольного кольца составляет 305 см (10 футов)?",
    "in-to-cm": "Знаете ли вы, что самая большая зарегистрированная ступня человека была длиной 15.75 дюймов (40 см)?",
    "j-to-cal": "Знаете ли вы, что одна калория равна количеству энергии, необходимому для нагрева 1 грамма воды на 1°C?",
    "cal-to-j": "Знаете ли вы, что один джоуль — это энергия, необходимая для перемещения объекта массой 1 кг на 1 метр с силой 1 Ньютон?",
    "kcal-to-j": "Знаете ли вы, что одна килокалория (или «пищевая калория») эквивалентна энергии, достаточной для нагрева 1 литра воды на 1°C?",
    "j-to-kcal": "Знаете ли вы, что энергия, потребляемая стандартной лампочкой мощностью 60 Вт за 1 секунду, равна 60 джоулей?",
    "kwh-to-j": "Знаете ли вы, что 1 кВт·ч энергии достаточно для работы 100-ваттной лампочки в течение 10 часов?",
    "j-to-kwh": "Знаете ли вы, что энергия от молнии может достигать 5 миллиардов джоулей, что равно примерно 1.4 кВт·ч?",
    "liters-to-gallons": "Знаете ли вы, что в среднем американском бассейне содержится около 13,500 галлонов воды (примерно 51,000 литров)?",
    "gallons-to-liters": "Знаете ли вы, что один галлон воды весит примерно 8.34 фунта (3.78 кг)?",
    "ml-to-oz": "Знаете ли вы, что стандартная чашка эспрессо обычно содержит 30 мл (около 1 унции)?",
    "oz-to-ml": "Знаете ли вы, что одна унция жидкости эквивалентна примерно двум столовым ложкам (29.57 мл)?",
    "cups-to-ml": "Знаете ли вы, что стандартная американская кухонная чашка равна 236.588 мл?",
    "ml-to-cups": "Знаете ли вы, что 1 литр воды — это примерно 4.23 чашки?",
    "pints-to-liters": "Знаете ли вы, что пинта молока эквивалентна примерно 0.473 литра?",
    "liters-to-pints": "Знаете ли вы, что в двухлитровой бутылке содержится примерно 4.23 пинты?",
    "b-to-kb": "Знаете ли вы, что один килобайт равен 1024 байтам, а не 1000, из-за бинарной системы исчисления?",
    "kb-to-b": "Знаете ли вы, что текстовый файл из 1 КБ обычно содержит около 1000 символов, в зависимости от кодировки?",
    "kb-to-mb": "Знаете ли вы, что одна стандартная песня в формате MP3 занимает около 3-5 мегабайт, что равно примерно 3000-5000 КБ?",
    "mb-to-kb": "Знаете ли вы, что фотография высокого разрешения может занимать от 1 до 5 мегабайт (от 1024 до 5120 КБ)?",
    "mb-to-gb": "Знаете ли вы, что на DVD-диске стандартной ёмкости (4.7 ГБ) можно хранить около 1200 песен в формате MP3?",
    "gb-to-mb": "Знаете ли вы, что 1 ГБ равен 1024 МБ, а не 1000 МБ, из-за бинарной природы хранения данных?",
    "gb-to-tb": "Знаете ли вы, что современный жёсткий диск может вместить до 4-8 ТБ данных, что эквивалентно миллионам документов или фотографий?",
    "tb-to-gb": "Знаете ли вы, что 1 ТБ равен 1024 ГБ, и этого объёма достаточно, чтобы хранить более 250 000 песен?",
    "mps-to-kph": "Знаете ли вы, что скорость звука в воздухе составляет примерно 343 м/с, что эквивалентно 1235 км/ч?",
    "kph-to-mps": "Знаете ли вы, что минимальная скорость, необходимая для выхода на орбиту Земли, составляет около 28,000 км/ч (7,800 м/с)?",
    "kph-to-mph": "Знаете ли вы, что самая высокая зарегистрированная скорость гоночного автомобиля Формулы-1 составляет около 372 км/ч (231 миль/ч)?",
    "mph-to-kph": "Знаете ли вы, что самый быстрый пассажирский поезд в мире, китайский Shanghai Maglev, развивает скорость до 431 км/ч (268 миль/ч)?",
    "mps-to-mph": "Знаете ли вы, что максимальная скорость свободного падения парашютиста без специального оборудования составляет около 53 м/с (190 миль/ч)?",
    "mph-to-mps": "Знаете ли вы, что автомобиль, движущийся со скоростью 60 миль/ч, проезжает примерно 26.8 метра в секунду?"

};



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
            formula = "°F = (°C × 9/5) + 32"; 
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)}°F`;
            break;

        case "f-to-c":
            result = (value - 32) * 5 / 9;
            formula = "°C = (°F - 32) × 5/9"; 
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)}°C`;
            break;

        case "c-to-k":
            result = value + 273.15;
            formula = "K = °C + 273.15"; 
            conversionResult.textContent = `${value}°C = ${result.toFixed(2)} K`;
            break;

        case "k-to-c":
            result = value - 273.15;
            formula = "°C = K - 273.15"; 
            conversionResult.textContent = `${value} K = ${result.toFixed(2)}°C`;
            break;

        case "f-to-k":
            result = (value - 32) * 5 / 9 + 273.15;
            formula = "K = (°F - 32) × 5/9 + 273.15"; 
            conversionResult.textContent = `${value}°F = ${result.toFixed(2)} K`;
            break;

        case "k-to-f":
            result = (value - 273.15) * 9 / 5 + 32;
            formula = "°F = (K - 273.15) × 9/5 + 32"; 
            conversionResult.textContent = `${value} K = ${result.toFixed(2)}°F`;
            break;


        // Расстояние
        case "km-to-mi":
            result = value * 0.621371;
            formula = "Мили = Км × 0.621371";
            conversionResult.textContent = `${value} км = ${result.toFixed(2)} миль`;
            break;

        case "mi-to-km":
            result = value / 0.621371;
            formula = "Км = Мили / 0.621371";
            conversionResult.textContent = `${value} миль = ${result.toFixed(2)} км`;
            break;

        case "m-to-ft":
            result = value * 3.28084;
            formula = "Футы = Метры × 3.28084"; 
            conversionResult.textContent = `${value} м = ${result.toFixed(2)} футов`;
            break;

        case "ft-to-m":
            result = value / 3.28084;
            formula = "Метры = Футы / 3.28084";
            conversionResult.textContent = `${value} футов = ${result.toFixed(2)} м`;
            break;

        case "cm-to-in":
            result = value / 2.54;
            formula = "Дюймы = См / 2.54"; 
            conversionResult.textContent = `${value} см = ${result.toFixed(2)} дюймов`;
            break;

        case "in-to-cm":
            result = value * 2.54;
            formula = "См = Дюймы × 2.54";
            conversionResult.textContent = `${value} дюймов = ${result.toFixed(2)} см`;
            break;


        // Энергия
        case "j-to-cal":
            result = value / 4.184;
            formula = "Кал = Дж / 4.184";
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} калорий`;
            break;

        case "cal-to-j":
            result = value * 4.184;
            formula = "Дж = Кал × 4.184"; 
            conversionResult.textContent = `${value} калорий = ${result.toFixed(2)} Дж`;
            break;

        case "kcal-to-j":
            result = value * 4184;
            formula = "Дж = Ккал × 4184"; 
            conversionResult.textContent = `${value} ккал = ${result.toFixed(2)} Дж`;
            break;

        case "j-to-kcal":
            result = value / 4184;
            formula = "Ккал = Дж / 4184"; 
            conversionResult.textContent = `${value} Дж = ${result.toFixed(2)} ккал`;
            break;

        case "kwh-to-j":
            result = value * 3600000;
            formula = "Дж = КВт·ч × 3600000"; 
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

                case "sqm-to-sqft":
            result = value * 10.7639;
            formula = "Кв. футы = Кв. метры × 10.7639"; // Формула преобразования из квадратных метров в квадратные футы
            conversionResult.textContent = `${value} м² = ${result.toFixed(2)} фут²`;
            break;

        case "sqft-to-sqm":
            result = value / 10.7639;
            formula = "Кв. метры = Кв. футы / 10.7639"; // Формула преобразования из квадратных футов в квадратные метры
            conversionResult.textContent = `${value} фут² = ${result.toFixed(2)} м²`;
            break;

        case "sqm-to-are":
            result = value / 100;
            formula = "Ары = Кв. метры / 100"; // Формула преобразования из квадратных метров в ары
            conversionResult.textContent = `${value} м² = ${result.toFixed(2)} ары`;
            break;

        case "are-to-sqm":
            result = value * 100;
            formula = "Кв. метры = Ары × 100"; // Формула преобразования из ар в квадратные метры
            conversionResult.textContent = `${value} ары = ${result.toFixed(2)} м²`;
            break;

        case "sqm-to-ha":
            result = value / 10_000;
            formula = "Гектары = Кв. метры / 10,000"; // Формула преобразования из квадратных метров в гектары
            conversionResult.textContent = `${value} м² = ${result.toFixed(2)} га`;
            break;

        case "ha-to-sqm":
            result = value * 10_000;
            formula = "Кв. метры = Гектары × 10,000"; // Формула преобразования из гектаров в квадратные метры
            conversionResult.textContent = `${value} га = ${result.toFixed(2)} м²`;
            break;

        case "ha-to-acres":
            result = value * 2.47105;
            formula = "Акры = Гектары × 2.47105"; // Формула преобразования из гектаров в акры
            conversionResult.textContent = `${value} га = ${result.toFixed(2)} акров`;
            break;

        case "acres-to-ha":
            result = value / 2.47105;
            formula = "Гектары = Акры / 2.47105"; // Формула преобразования из акров в гектары
            conversionResult.textContent = `${value} акров = ${result.toFixed(2)} га`;
            break;

        //скорость передачи данных
        case "bps-to-kbps":
            result = value / 1000;
            formula = "Кбит/с = Бит/с / 1000"; // Формула преобразования из бит/с в килобиты/с
            conversionResult.textContent = `${value} бит/с = ${result.toFixed(2)} Кбит/с`;
            break;

        case "kbps-to-bps":
            result = value * 1000;
            formula = "Бит/с = Кбит/с × 1000"; // Формула преобразования из килобитов/с в биты/с
            conversionResult.textContent = `${value} Кбит/с = ${result.toFixed(2)} бит/с`;
            break;

        case "kbps-to-mbps":
            result = value / 1000;
            formula = "Мбит/с = Кбит/с / 1000"; // Формула преобразования из килобитов/с в мегабиты/с
            conversionResult.textContent = `${value} Кбит/с = ${result.toFixed(2)} Мбит/с`;
            break;

        case "mbps-to-kbps":
            result = value * 1000;
            formula = "Кбит/с = Мбит/с × 1000"; // Формула преобразования из мегабитов/с в килобиты/с
            conversionResult.textContent = `${value} Мбит/с = ${result.toFixed(2)} Кбит/с`;
            break;

        case "mbps-to-gbps":
            result = value / 1000;
            formula = "Гбит/с = Мбит/с / 1000"; // Формула преобразования из мегабитов/с в гигабиты/с
            conversionResult.textContent = `${value} Мбит/с = ${result.toFixed(2)} Гбит/с`;
            break;

        case "gbps-to-mbps":
            result = value * 1000;
            formula = "Мбит/с = Гбит/с × 1000"; // Формула преобразования из гигабит/с в мегабиты/с
            conversionResult.textContent = `${value} Гбит/с = ${result.toFixed(2)} Мбит/с`;
            break;

        case "gbps-to-tbps":
            result = value / 1000;
            formula = "Тбит/с = Гбит/с / 1000"; // Формула преобразования из гигабит/с в терабиты/с
            conversionResult.textContent = `${value} Гбит/с = ${result.toFixed(2)} Тбит/с`;
            break;

        case "tbps-to-gbps":
            result = value * 1000;
            formula = "Гбит/с = Тбит/с × 1000"; // Формула преобразования из терабит/с в гигабиты/с
            conversionResult.textContent = `${value} Тбит/с = ${result.toFixed(2)} Гбит/с`;
            break;



        //частота
        case "hz-to-khz":
            result = value / 1000;
            formula = "КГц = Гц / 1000"; // Формула преобразования из герц в килогерцы
            conversionResult.textContent = `${value} Гц = ${result.toFixed(2)} КГц`;
            break;

        case "khz-to-hz":
            result = value * 1000;
            formula = "Гц = КГц × 1000"; // Формула преобразования из килогерц в герцы
            conversionResult.textContent = `${value} КГц = ${result.toFixed(2)} Гц`;
            break;

        case "khz-to-mhz":
            result = value / 1000;
            formula = "МГц = КГц / 1000"; // Формула преобразования из килогерц в мегагерцы
            conversionResult.textContent = `${value} КГц = ${result.toFixed(2)} МГц`;
            break;

        case "mhz-to-khz":
            result = value * 1000;
            formula = "КГц = МГц × 1000"; // Формула преобразования из мегагерц в килогерцы
            conversionResult.textContent = `${value} МГц = ${result.toFixed(2)} КГц`;
            break;

        case "mhz-to-ghz":
            result = value / 1000;
            formula = "ГГц = МГц / 1000"; // Формула преобразования из мегагерц в гигагерцы
            conversionResult.textContent = `${value} МГц = ${result.toFixed(2)} ГГц`;
            break;

        case "ghz-to-mhz":
            result = value * 1000;
            formula = "МГц = ГГц × 1000"; // Формула преобразования из гигагерц в мегагерцы
            conversionResult.textContent = `${value} ГГц = ${result.toFixed(2)} МГц`;
            break;

        case "hz-to-mhz":
            result = value / 1_000_000;
            formula = "МГц = Гц / 1,000,000"; // Формула преобразования из герц в мегагерцы
            conversionResult.textContent = `${value} Гц = ${result.toFixed(2)} МГц`;
            break;

        case "mhz-to-hz":
            result = value * 1_000_000;
            formula = "Гц = МГц × 1,000,000"; // Формула преобразования из мегагерц в герцы
            conversionResult.textContent = `${value} МГц = ${result.toFixed(2)} Гц`;
            break;

        case "hz-to-ghz":
            result = value / 1_000_000_000;
            formula = "ГГц = Гц / 1,000,000,000"; // Формула преобразования из герц в гигагерцы
            conversionResult.textContent = `${value} Гц = ${result.toFixed(9)} ГГц`;
            break;

        case "ghz-to-hz":
            result = value * 1_000_000_000;
            formula = "Гц = ГГц × 1,000,000,000"; // Формула преобразования из гигагерц в герцы
            conversionResult.textContent = `${value} ГГц = ${result.toFixed(2)} Гц`;
            break;

                case "kg-to-lb":
            result = value * 2.20462;
            formula = "Фунты = Кг × 2.20462"; // Формула преобразования из килограммов в фунты
            conversionResult.textContent = `${value} кг = ${result.toFixed(2)} фунтов`;
            break;

        case "lb-to-kg":
            result = value / 2.20462;
            formula = "Кг = Фунты / 2.20462"; // Формула преобразования из фунтов в килограммы
            conversionResult.textContent = `${value} фунтов = ${result.toFixed(2)} кг`;
            break;

        case "kg-to-g":
            result = value * 1000;
            formula = "Граммы = Кг × 1000"; // Формула преобразования из килограммов в граммы
            conversionResult.textContent = `${value} кг = ${result.toFixed(2)} г`;
            break;

        case "g-to-kg":
            result = value / 1000;
            formula = "Кг = Граммы / 1000"; // Формула преобразования из граммов в килограммы
            conversionResult.textContent = `${value} г = ${result.toFixed(2)} кг`;
            break;

        case "g-to-mg":
            result = value * 1000;
            formula = "Мг = Граммы × 1000"; // Формула преобразования из граммов в миллиграммы
            conversionResult.textContent = `${value} г = ${result.toFixed(2)} мг`;
            break;

        case "mg-to-g":
            result = value / 1000;
            formula = "Граммы = Мг / 1000"; // Формула преобразования из миллиграммов в граммы
            conversionResult.textContent = `${value} мг = ${result.toFixed(2)} г`;
            break;

        case "ton-to-kg":
            result = value * 1000;
            formula = "Кг = Тонны × 1000"; // Формула преобразования из тонн в килограммы
            conversionResult.textContent = `${value} тонн = ${result.toFixed(2)} кг`;
            break;

        case "kg-to-ton":
            result = value / 1000;
            formula = "Тонны = Кг / 1000"; // Формула преобразования из килограммов в тонны
            conversionResult.textContent = `${value} кг = ${result.toFixed(2)} тонн`;
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
    
    const fact = facts[conversionType];
    if (fact) {
        factElement.textContent = `Интересный факт: ${fact}`;
    } else {
        factElement.textContent = ""; // Очистка, если факт отсутствует
    }

});


const calcInput1 = document.getElementById("calc-input1");
const calcInput2 = document.getElementById("calc-input2");
const calcOperation = document.getElementById("calc-operation");
const calcCalculate = document.getElementById("calc-calculate");
const calcResult = document.getElementById("calc-result");

calcCalculate.addEventListener("click", () => {
    const num1 = parseFloat(calcInput1.value);
    const num2 = parseFloat(calcInput2.value);
    const operation = calcOperation.value;

    if (isNaN(num1) || isNaN(num2)) {
        calcResult.textContent = "Ошибка: введите корректные числа.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                calcResult.textContent = "Ошибка: деление на ноль.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            calcResult.textContent = "Ошибка: выбрана некорректная операция.";
            return;
    }

    calcResult.textContent = `Результат: ${result}`;
});
