// Chart.js Report Graph
const ctx = document.getElementById('reportsChart').getContext('2d');

const reportsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Production",
                data: [95, 93, 96, 94, 97],
                borderColor: "blue",
                fill: false
            },
            {
                label: "Quality",
                data: [90, 92, 91, 93, 92],
                borderColor: "green",
                fill: false
            },
            {
                label: "Safety",
                data: [98, 97, 99, 97, 98],
                borderColor: "gold",
                fill: false
            }
        ]
    }
});

// Sample Reports Data
let reportData = [
    { name: "Production Analysis", date: "2024-02-01", department: "Manufacturing", status: "Completed" },
    { name: "Quality Inspection", date: "2024-01-30", department: "Quality Control", status: "Pending" }
];

// Load Reports Data
function loadReports() {
    let tableBody = document.getElementById("reportsTable");
    tableBody.innerHTML = "";

    reportData.forEach(entry => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${entry.name}</strong></td>
            <td>${entry.date}</td>
            <td>${entry.department}</td>
            <td class="status ${entry.status.toLowerCase()}">${entry.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", loadReports);
