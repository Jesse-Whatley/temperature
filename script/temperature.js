function convertTemperatureRange(){
    
    let startValue = prompt("Enter A Start Number:");
    let endValue = prompt("Enter A End Number:");
    let scale = prompt("Enter A Scale: 1)F 2)C");

    for(let i = startValue; i <= endValue; i++)
    if(scale == 1){
        let fahrenheit = i;
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('temperature').innerHTML += `<p>The Conversion of Fahrenheit ${fahrenheit}° to Celsius is ${celsius}°</p>`;
    }
    for(let i = startValue; i <= endValue; i++)
    if(scale == 2){
        let celsius = i;
        fahrenheit = (celsius * 5/9) + 32;
        document.getElementById('temperature').innerHTML += `<p>The Conversion of Fahrenheit ${celsius}° to Celsius is ${fahrenheit}°</p>`;
    }
}

