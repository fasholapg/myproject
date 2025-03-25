// Attendance Chart
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
new Chart(attendanceCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Attendance',
            data: [150, 145, 140, 138, 142, 143, 141],
            borderColor: 'blue',
            borderWidth: 2
        }]
    }
});

// Payment Chart
const paymentCtx = document.getElementById('paymentChart').getContext('2d');
new Chart(paymentCtx, {
    type: 'doughnut',
    data: {
        labels: ['Regular Pay', 'Overtime', 'Bonuses'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: ['blue', 'green', 'yellow']
        }]
    }
});
