// Initialized Graded data
const SampleGradeInfo = [{
        Name: "Boko Isaac",
        PhysicsGrade: 50,
        ChemistryGrade: 70
    },

    {
        Name: "John Isaac",
        PhysicsGrade: 60,
        ChemistryGrade: 80
    },

    {
        Name: "Mark Pete",
        PhysicsGrade: 90,
        ChemistryGrade: 10,
    }
];

// function to add sample data to the table when the page loads
SampleGradeInfo.forEach(function(OnLoadGrade){
    DisplayGradesToTable(OnLoadGrade);
});


// Function To Display 
function DisplayGradesToTable(){
    const TableBody = document.getElementById("table-body");
    const TableRow = document.createElement("tr");
    TableRow.innerHTML = `
    
    
    `;
}

// function that actually ADDs and Displays the Sample Data
function HandleOnLoadGrade(){
    document.addEventListener("DOMContentLoaded",DisplayInitialGrades);
}