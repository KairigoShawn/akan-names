const getakanname = function (e) {
  e.preventDefault();
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  const birthday = document.getElementById("selected-date").value;
  if (!birthday) {
    return alert("Please Select Birthday");
  }
  const day = new Date(birthday).getDay();
  const femaleGender = document.getElementById("female-radio-btn").checked;
  const maleGender = document.getElementById("male-radio-btn").checked;
  if (femaleGender) {
    alert("Your Akan Name is " + femaleNames[day]);
  } else if (maleGender) {
    alert("Your Akan Name is " + maleNames[day]);
  } else {
    return alert("Please select Gender");
  }
};

document.querySelector("#akan-form").addEventListener("submit", getakanname);
