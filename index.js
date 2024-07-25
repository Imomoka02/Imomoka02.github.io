
function toggleTable(tableId) {
    const table = document.getElementById(tableId);
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('rankingChart').getContext('2d');
    const rankingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['第1回生存者発表式', '第2回生存者発表式', '第3回生存者発表式', 'Final'],
            datasets: [
                {
                    label: 'ジャンハオ',
                    data: [5, 2, 2, 1],
                    borderColor: 'red',
                    fill: false
                },
                {
                    label: 'ソンハンビン',
                    data: [1, 1, 1, 2],
                    borderColor: 'blue',
                    fill: false
                },
                {
                    label: 'ソクマシュー',
                    data: [2, 4, 9, 3],
                    borderColor: 'green',
                    fill: false
                },
                {
                    label: 'リッキー',
                    data: [12, 14, 8, 4],
                    borderColor: 'purple',
                    fill: false
                },
                {
                    label: 'パクゴヌク',
                    data: [3, 5, 12, 5],
                    borderColor: 'orange',
                    fill: false
                },
                {
                    label: 'キムテレ',
                    data: [11, 7, 4, 6],
                    borderColor: 'yellow',
                    fill: false
                },
                {
                    label: 'キムギュビン',
                    data: [6, 6, 7, 7],
                    borderColor: 'brown',
                    fill: false
                },
                {
                    label: 'キムジウン',
                    data: [3, 5, 3, 8],
                    borderColor: 'pink',
                    fill: false
                },
                {
                    label: 'ハンユジン',
                    data: [4, 3, 5, 9],
                    borderColor: 'gray',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    reverse: true,
                    ticks: {
                        stepSize: 1,
                        beginAtZero: true,
                        max: 35
                    }
                }
            }
        }
    });
});

