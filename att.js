// Sample Attendance Data
let attendanceData = [
  { name: "Sarah Johnson", clockIn: "08:02 AM", clockOut: "05:00 PM", status: "On Time", image: "images/user1.jpg" },
  { name: "Michael Chen", clockIn: "09:15 AM", clockOut: "-", status: "Late", image: "images/user2.jpg" },
  { name: "Emily Davis", clockIn: "08:10 AM", clockOut: "04:55 PM", status: "On Time", image: "images/user3.jpg" }
];

// Load Attendance Data
function loadAttendance() {
  let tableBody = document.getElementById("attendanceTable");
  tableBody.innerHTML = "";

  attendanceData.forEach(entry => {
      let row = document.createElement("tr");
      row.innerHTML = `
          <td><img src="${entry.image}" alt="${entry.name}"> ${entry.name}</td>
          <td>${entry.clockIn}</td>
          <td>${entry.clockOut}</td>
          <td class="status ${entry.status.toLowerCase().replace(" ", "-")}">${entry.status}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", loadAttendance);
