const submitBtn = document.getElementById('submit')
const cityNameEl = document.getElementById('cityName')

const displayCityName = document.getElementById('city_name')
const tempStatus = document.getElementById('temp_status')
const temp = document.getElementById('temp')
const dayEl = document.getElementById('day')
const todayDate = document.getElementById('today_date')

const dataHideEl = document.querySelector('.data_hide')

const api_key = '9da11dc7b2e764f22ef302e6f8d18996'

const getWeatherData = async (e) => {
    e.preventDefault()
    let cityName = cityNameEl.value;

    if (cityName === '') {
        displayCityName.innerText = 'Write the city name before search'
    }
    else {
        try {
            dataHideEl.style.visibility = 'visible';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`

            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            console.log(arrData);
            displayCityName.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText = arrData[0].main.temp

            const tempMood = arrData[0].weather[0].main

            if (tempMood === 'Clear') {
                tempStatus.innerHTML = `
                <i class='fa-regular fa-sun' style='color: #eccc68;'></i>`
            }
            else if (tempMood === 'Clouds') {
                tempStatus.innerHTML = `
                <i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>`
            }

            else if (tempMood === 'Rain') {
                tempStatus.innerHTML = `
                <i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>`
            }
            else {
                tempStatus.innerHTML = `
                <i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>`
            }

        }
        catch (err) {
            displayCityName.innerText = 'Enter the city name properly'
            dataHideEl.style.visibility = 'hidden';
        }
    }
    cityNameEl.value = ''

}

submitBtn.addEventListener('click', getWeatherData)

const date = new Date()
let week = date.toString().slice(0, 4)
let month = date.toString().slice(4, 7)
let today_date = date.getDate()

dayEl.innerText = week
todayDate.innerText = `${today_date} ${month}`