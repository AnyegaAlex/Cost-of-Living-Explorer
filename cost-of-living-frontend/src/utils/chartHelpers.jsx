// frontend/src/utils/chartHelpers.js
export const createChartConfig = (data, type = 'bar') => {
    return {
        type,
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };
};