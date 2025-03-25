// Worker Data (Simulated API)
let workers = [
  { name: "Sarah Johnson", email: "sarahj@example.com", image: "images/user1.jpg" },
  { name: "Michael Chen", email: "michael.c@example.com", image: "images/user2.jpg" },
  { name: "David Wilson", email: "david.w@example.com", image: "images/user3.jpg" },
  { name: "Emily Davis", email: "emily.d@example.com", image: "images/user4.jpg" }
];

// Load Workers
function loadWorkers() {
  let container = document.querySelector(".workers-list");
  container.innerHTML = "";

  workers.forEach(worker => {
      let workerDiv = document.createElement("div");
      workerDiv.classList.add("worker");
      workerDiv.innerHTML = `
          <img src="${worker.image}" alt="${worker.name}">
          <div>
              <h4>${worker.name}</h4>
              <p>${worker.email}</p>
          </div>
      `;
      container.appendChild(workerDiv);
  });
}

// Add New Worker
document.getElementById("addWorkerBtn").addEventListener("click", function () {
  let name = prompt("Enter worker's name:");
  let email = prompt("Enter worker's email:");
  let image = "images/default.jpg"; // Default image

  if (name && email) {
      workers.push({ name, email, image });
      loadWorkers();
  }
});

// Pagination (Placeholder)
document.querySelectorAll(".pagination button").forEach(btn => {
  btn.addEventListener("click", function () {
      document.querySelectorAll(".pagination button").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
  });
});

// Initial Load
loadWorkers();
