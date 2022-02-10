const button = document.querySelector("#btn");
button.addEventListener("click", (e) => {
    // Prevent Default Button Behavior
    e.preventDefault();
    let NameInput = document.querySelector('#fullname').value;
    let PhysicsInput = document.querySelector('#physics').value;
    let ChemistryInput = document.querySelector('#chemistry').value;

    // VALIDATION OF
    if(NameInput === "" || PhysicsInput === "" || ChemistryInput === ""){
        NotifyAlert("Please fill in the Fields","danger");
    }else{
        let TableBody = document.querySelector("#table-body");
        let TableRow = document.createElement("tr");

        TableRow.innerHTML = `
            <td scope="col" class="text-center">${NameInput}</td>
            <td scope="col" class="text-center">${PhysicsInput}</td>
            <td scope="col" class="text-center">${ChemistryInput}</td>
            <td scope="col" class="text-center text-decoration-none text-danger"><a href="#delete"><img src="./images/de.png" alt=""></a></td>
        `;

        TableBody.appendChild(TableRow);

        //  NOTIFY THE USER
        NotifyAlert("successfully added info","success");
    }
});




function NotifyAlert(notification, alertclass) {
    let NotifyDiv = document.createElement('div');
    NotifyDiv.className = `alert mx-auto  text-center alert-${alertclass}`;
    NotifyDiv.style.width = `50%`;
    NotifyDiv.style.border = `None`;
    NotifyDiv.textContent = `${notification}`;
    let use = document.getElementById("use");
    use.replaceWith(NotifyDiv);

    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 4000);
}


//  DELETE















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