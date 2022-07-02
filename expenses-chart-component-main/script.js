
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
        chart.innerHTML = `
            <div class="chart-title">${item.day}</div>
            <div class="chart-value">${item.amount}</div>
        `;
        chartContainer.appendChild(chart);
    });
});

