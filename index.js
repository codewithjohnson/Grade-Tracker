function NotifyAlert(notification,alertclass){
    const NotifyDiv = document.createElement('div');
    NotifyDiv.className = `alert mx-auto  text-center alert-${alertclass}`;
    NotifyDiv.style.width = `50%`;
    NotifyDiv.style.border = `None`;
    NotifyDiv.textContent = `${notification}`;
    const section = document.getElementById('section');
    const parentDiv = document.getElementById("section").parentNode;
    parentDiv.insertBefore(NotifyDiv,section);

    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
}



document.querySelector("#btn").addEventListener("click", (e) => {
    // Prevent Default Button Behavior
    e.preventDefault();
    let NameInput = document.querySelector('#fullname').value;
    let PhysicsInput = document.querySelector('#physics').value;
    let ChemistryInput = document.querySelector('#chemistry').value;

    let TableBody = document.querySelector("#table-body");
    let TableRow = document.createElement("tr");

    TableRow.innerHTML = `
        <td scope="col" class="text-center">${NameInput}</td>
        <td scope="col" class="text-center">${PhysicsInput}%</td>
        <td scope="col" class="text-center">${ChemistryInput}%</td>
        <td scope="col" class="text-center text-decoration-none text-danger"><a href="#delete"><img src="./images/de.png" alt=""></a></td>
    `;
    // APPEND ROW TO TABLE
    TableBody.appendChild(TableRow);

    //  NOTIFY THE USER
    NotifyAlert("SUCESSFULLY ADDED","success");

    // CLEAR INPUT VALUES
    document.getElementById("fullname").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";


});
















// // Sample Data that will be used anytime page loads
// const SampleGradeInfo = [{
//         Name: "Boko Isaac",
//         PhysicsGrade: 50,
//         ChemistryGrade: 70
//     },

//     {
//         Name: "John Moses",
//         PhysicsGrade: 60,
//         ChemistryGrade: 80
//     },

//     {
//         Name: "Mark Peter",
//         PhysicsGrade: 90,
//         ChemistryGrade: 10,
//     }
// ];

// // function to add sample data to the table when the page loads
// SampleGradeInfo.forEach((OnLoadGrade) => DisplayGradesToTable(OnLoadGrade));



// // Now it is time to access the inputed values from users and add them to the table

// button = document.getElementById("btn");
// button.addEventListener("click", function (e) {
//     e.preventDefault();

//     let NameInput = document.querySelector('#fullname').value;
//     let PhysicsInput = document.querySelector('#physics').value;
//     let ChemistryInput = document.querySelector('#chemistry').value;

//     obj.push({NameInput,PhysicsInput,ChemistryInput});
//     obj.forEach((inputs) => DisplayGradesToTable(inputs));
//     console.log(obj);
//     obj = [];
// });


// function to display data anytime into the table
// function DisplayGradesToTable(data) {
// let TableBody = document.querySelector("#table-body");
// let TableRow = document.createElement("tr");

// TableRow.innerHTML = `
//         <td scope="col" class="text-center">${data.Name}</td>
//         <td scope="col" class="text-center">${data.PhysicsGrade}</td>
//         <td scope="col" class="text-center">${data.ChemistryGrade}</td>
//         <td scope="col" class="text-center text-decoration-none text-danger"><a href="#delete"><img src="./images/de.png" alt=""></a></td>

//     `;
// TableBody.appendChild(TableRow);
// NotifyAlert('successfully added information', "success");

// }