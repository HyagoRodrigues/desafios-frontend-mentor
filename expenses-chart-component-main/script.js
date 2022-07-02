
const data = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.log(error));


let chartContainer = document.querySelector('.chart-container');




data.then(data => {
    data.forEach(item => {        
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 8; 
        let value = "";
        //maior valor entre os dados
        let maxValue = Math.max(...data.map(item => item.amount));
        if(item.amount === maxValue) {
            value = `<div class="chart-value active" style="--height:${height}em"></div>`;
        }else{
            value = `<div class="chart-value" style="--height:${height}em"></div>`;
        }
        chart.innerHTML = `
            <div class="chart-wrapper">
                ${value}
            </div>
            <div class="chart-title">${item.day}</div>
        `;
        chartContainer.appendChild(chart);
    });
});




