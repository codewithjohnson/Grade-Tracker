function GradingSoftware(NameInput, PhysicsInput, ChemistryInput) {
    this.NameInput = NameInput;
    this.PhysicsInput = PhysicsInput;
    this.ChemistryInput = ChemistryInput;

    this.NotifyAlert = function (notification,alertclass) {
        const NotifyDiv = document.createElement('div');
        NotifyDiv.className = `alert mx-auto  text-center alert-${alertclass}`;
        NotifyDiv.style.width = `50%`;
        NotifyDiv.style.border = `None`;
        NotifyDiv.textContent = `${notification}`;
        const section = document.getElementById('section');
        const parentDiv = document.getElementById("section").parentNode;
        parentDiv.insertBefore(NotifyDiv, section);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 1000);
    };


    // FUNCTION TO DISPLAY SAMPLE GRADE
    this.DisplaySampleGrade = function () {
        document.addEventListener("load", this.AddGradeTotable());
    };


    // FUNCTION TO  CLEAR INPUT VALUES
    this.ClearInputValues = function(){
        document.getElementById("fullname").value = "";
        document.getElementById("physics").value = "";
        document.getElementById("chemistry").value = "";
    };
    

    // FUNCTION TO ADD GRADES TO TABLE
    this.AddGradeTotable = function () {
        let TableBody = document.querySelector("#table-body");
        let TableRow = document.createElement("tr");

        TableRow.innerHTML = `
        <td scope="col" class="text-center">${this.NameInput}</td>
        <td scope="col" class="text-center">${this.PhysicsInput}%</td>
        <td scope="col" class="text-center">${this.ChemistryInput}%</td>
        <td scope="col" class="text-center delete text-decoration-none text-danger"><a href="#delete"><img src="./images/de.png" alt=""></a></td>
        `;
        // APPEND ROW TO TABLE
        TableBody.appendChild(TableRow);
    };

    // FUNCTION TO DELETE ENTRIES FRO



}


// SAMPLE DATA TO DISPLAY EVERYTIME THE PAGES LOADS
const SampleGrade = new GradingSoftware("Sample Name",50,75);
SampleGrade.DisplaySampleGrade();




document.querySelector("#btn").addEventListener('click',function(e){
    // Prevent Default Button Behavior
    e.preventDefault();

    let NameInput = document.querySelector('#fullname').value;
    let PhysicsInput = document.querySelector('#physics').value;
    let ChemistryInput = document.querySelector('#chemistry').value;

    // console.log(NameInput);

    if(NameInput == "" || PhysicsInput == "" || ChemistryInput == "" ){
        const alarm = new GradingSoftware();
        alarm.NotifyAlert("please fill the form",'danger');
    }

    else{
        const HandleGrades = new GradingSoftware(NameInput,PhysicsInput,ChemistryInput);
        HandleGrades.AddGradeTotable();
        HandleGrades.NotifyAlert("SUCESSFULLY ADDED","success");
        HandleGrades.ClearInputValues();
    }
});

Body = document.getElementById("table-body");
Del = document.getElementById("delete");
console.log(Del);

