export const lineChartData = {
    labels: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
    datasets: [ {
        label: 'Steps by John Doe',
        data: [ 6234, 4872, 7150, 5498, 3921, 8523, 6107 ],
        borderColor: '#34d399'
    }, {
        label: 'Steps by Jane Doe',
        data: [ 5782, 4291, 6345, 7852, 4510, 3147, 5983 ],
        borderColor: '#fbbf24'
    }, ]
};

export const barChartData = {
    labels: [ 'Rent', 'Groceries', 'Utilities', 'Entertainment', 'Transportation' ],
    datasets: [ {
        label: 'Expenses',
        data: [ 2025, 779, 734, 1025, 288 ],
        backgroundColor: [ '#bae6fd' ],
        borderColor: [ '#082f49' ],
        borderWidth: 1
    }, ],
};

export const pieChartData = {
    labels: [ 'Facebook', 'Instagram', 'TikTok', 'Twitter', 'Snapchat' ],
    datasets: [ {
        label: 'Time Spent',
        data: [ 30, 45, 60, 30, 20 ],
        backgroundColor: [
            '#1877F2', '#C32AA3', '#FF0000', '#1DA1F2', '#FFFC00'
        ],
        hoverOffset: 4,
    } ]
};