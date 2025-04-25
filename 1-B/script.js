document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const user = {
          name: document.getElementById("name").value.trim(),
          rollno: document.getElementById("rollno").value.trim(),
          city: document.getElementById("city").value.trim(),
          class: document.getElementById("class").value.trim(),
          email: document.getElementById("email").value.trim(),
          password: document.getElementById("password").value.trim(),
        };
  
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
  
        // Simulate AJAX POST
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("AJAX POST Response:", data);
            alert("Registration successful!");
            window.location.href = "userlist.html";
          })
          .catch((error) => {
            console.error("AJAX error:", error);
            alert("Something went wrong!");
          });
      });
    }
  });
  