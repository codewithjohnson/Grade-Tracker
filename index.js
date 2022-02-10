// Sample Data that will be used anytime page loads
const SampleGradeInfo = [{
        Name: "Boko Isaac",
        PhysicsGrade: 50,
        ChemistryGrade: 70
    },

    {
        Name: "John Moses",
        PhysicsGrade: 60,
        ChemistryGrade: 80
    },

    {
        Name: "Mark Peter",
        PhysicsGrade: 90,
        ChemistryGrade: 10,
    }
];

// function to add sample data to the table when the page loads
SampleGradeInfo.forEach((OnLoadGrade) => DisplayGradesToTable(OnLoadGrade));




function DisplayGradesToTable(data){
    let TableBody = document.querySelector("#table-body");
    let TableRow = document.createElement("tr");

    TableRow.innerHTML = `
            <td scope="col" class="text-center">${data.Name}</td>
            <td scope="col" class="text-center">${data.PhysicsGrade}</td>
            <td scope="col" class="text-center">${data.ChemistryGrade}</td>
            <td scope="col" class="text-center text-decoration-none text-danger"><a href="#delete"><img src="./images/de.png" alt=""></a></td>
            
        `;
    TableBody.appendChild(TableRow);
}

