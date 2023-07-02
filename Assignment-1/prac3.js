const CSPIT = {
    yearOfEstablishment: 2000,
    location: "Gujarat, India",
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    getDetails: function () {
      console.log("Details:");
      console.log("Year of Establishment: " + this.yearOfEstablishment);
      console.log("Location: " + this.location);
      console.log("Departments: " + this.departments.join(", "));
    },
  };
  
  
  CSPIT.CE = Object.create(CSPIT);
  CSPIT.CE.totalStudents = 250;
  CSPIT.CE.totalFaculty = 30;
  
  console.log("\nCE Department Details:");
  console.log("Total Students: " + CSPIT.CE.totalStudents);
  console.log("Total Faculty: " + CSPIT.CE.totalFaculty);
  
  console.log("\nCSPIT Details :");
  for (const key in CSPIT) {
    if (typeof CSPIT[key] !== "function") {
      console.log(key + ":" + CSPIT[key]);
    }
  }
  
  console.log("\nCE Dept. Details :");
  for (const key in CSPIT.CE) {
    if (typeof CSPIT.CE[key] !== "function") {
        console.log(key + ":", CSPIT.CE[key]);
  }
  
