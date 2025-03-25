// Sample Payment Data
let paymentData = [
  { name: "Sarah Johnson", date: "2024-02-01", amount: "$3,200", status: "Paid", image: "images/user1.jpg" },
  { name: "Michael Chen", date: "2024-02-02", amount: "$3,100", status: "Pending", image: "images/user2.jpg" },
  { name: "Emily Davis", date: "2024-02-03", amount: "$3,250", status: "Paid", image: "images/user3.jpg" }
];

// Load Payments Data
function loadPayments() {
  let tableBody = document.getElementById("paymentsTable");
  tableBody.innerHTML = "";

  paymentData.forEach(entry => {
      let row = document.createElement("tr");
      row.innerHTML = `
          <td><img src="${entry.image}" alt="${entry.name}"> ${entry.name}</td>
          <td>${entry.date}</td>
          <td>${entry.amount}</td>
          <td class="status ${entry.status.toLowerCase()}">${entry.status}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", loadPayments);
