// Get elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');

// Function to prevent scrolling
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
  document.body.style.overflow = 'auto';
}

// Open loginModal on button click
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
  disableScroll();
});

// Open signupModal on button click
signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
  disableScroll();
});

// Close loginModal on close button click
closeModal1.addEventListener('click', () => {
  loginModal.style.display = 'none';
  enableScroll();
});

// Close signupModal on close button click
closeModal2.addEventListener('click', () => {
  signupModal.style.display = 'none';
  enableScroll();
});


//credentialsverification

const logBTN = document.getElementById('log-btn');
const signBTN = document.getElementById('sign-btn');

signBTN.addEventListener('click', () => {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (localStorage.getItem(email) === password) {
    alert("User registered already");
    return;
  }

  localStorage.setItem(email, password);
  alert("New user Registered");
  window.location.href = "report.html";
});

logBTN.addEventListener('click', () => {
  let email_l = document.getElementById("email-l").value.trim();
  let password_l = document.getElementById("password-l").value.trim();

  if (!email_l || !password_l) {
    alert("Please fill in all fields.");
    return;
  }

  if (localStorage.getItem(email_l) === password_l) {
    alert("Login successful!");
    console.log("Redirecting to report.html");

    window.location.href = "report.html";
    
  } else {
    alert("Invalid email or password. Please try again.");
    return;
  }
});










//our mission
function showContent(index) {
    // Hide the default text
    document.getElementById('default-text').style.display = 'none';

    // Hide all content paragraphs
    const paragraphs = document.querySelectorAll('.content p:not(#default-text)');
    paragraphs.forEach((p) => p.style.display = 'none');

    // Show the selected paragraph
    document.getElementById(`content-${index}`).style.display = 'block';
}


// Function to open the sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the sidenav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


