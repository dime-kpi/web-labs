function Task1() {
    let User =
    {
        LastName: "Karpenko",
        FirstName: "Dmutro"
    };

    console.log("User last name: " + User.LastName + "\nFirst name: " + User.FirstName);
}

function Task2() {
    
    let Student = {
        Specialty: "",
        Group: "",

        addInfo: function (Specialty, Group) {
            this.Specialty = Specialty;
            this.Group = Group;
        },

        editInfo: function (Specialty, Group) {
            this.Specialty = Specialty;
            this.Group = Group;
        },

        deleteInfo: function () {
            this.Specialty = "";
            this.Group = "";
        }
    };
    Student.addInfo("122", "TR-25");
    console.log("Add data:\nSpecialty: " + Student.Specialty + "\nGroup: " + Student.Group);

    Student.editInfo("121", "IN-36");
    console.log("Edit data:\nSpecialty: " + Student.Specialty + "\nGroup: " + Student.Group);

    Student.deleteInfo();
    console.log("Delete data:\nSpecialty: " + Student.Specialty + "\nGroup: " + Student.Group);

    return Student;
}

function Task3() {
    let User = {
        LastName: "Karpenko",
        FirstName: "Dmutro"
    };

    let Student = {
        Specialty: "122",
        Group: "TR-25",

        addInfo: function (Specialty, Group) {
            this.Specialty = Specialty;
            this.Group = Group;
        },

        editInfo: function (Specialty, Group) {
            this.Specialty = Specialty;
            this.Group = Group;
        },

        deleteInfo: function () {
            this.Specialty = "";
            this.Group = "";
        }
    };

    for (let key in User) {
        if (User.hasOwnProperty(key)) {
            Student[key] = User[key];
        }
    }

    console.log("Updated object 'Student' after copying properties and metods from 'User':\nSpecialty: " + Student.Specialty + "\nGroup: " + Student.Group + "\nUser last name: " + User.LastName + "\nFirst name: " + User.FirstName);
}

function Task4() {
    let Student = Task2();
    Student.showData = function () {
        console.log("Show data:\nSpecialty: " + this.Specialty + "\nGroup: " + this.Group);
    };

    Student.addInfo("122", "TR-25");
    Student.showData();
}

function Task5() {
    let Student = {
        Specialty: "",
        Group: "",

        showData: function () {
            return "Specialty: " + this.Specialty + "\nGroup: " + this.Group + "\nSubjects: " + this.Subjects + "\nGrades: " + this.Grades;
        }
    };

    let Progress = Object.create(Student);
    Progress.Excluded = 0;

    Progress.calculateAverageGrage = function () {
        let sum = this.Grades.reduce((total, grade) => total + grade, 0);
        return "Average Grade: " + (sum / this.Grades.length).toFixed(2);
    };

    Student.showData = function () {
        return "Specialty: " + this.Specialty + "\nGroup: " + this.Group + "\nSubjects: " + this.Subjects + "\nGrades: " + this.Grades;
    };

    let progressObject = Object.create(Progress);
    progressObject.Specialty = "142";
    progressObject.Group = "AG-01";
    progressObject.Subjects = ["Physics", "Math", "Chemistry"];
    progressObject.Grades = [88, 92, 95];

    console.log(progressObject.showData());
    console.log(progressObject.calculateAverageGrage());
}

function Task6() {
    class GroupClass {
        constructor() {
            this._Specialty = "";
            this._Group = "";
        }

        get Specialty() {
            return this._Specialty;
        }

        set Specialty(value) {
            this._Specialty = value;
        }

        get Group() {
            return this._Group;
        }

        set Group(value) {
            this._Group = value;
        }

        showData() {
            return `Specialty: ${this._Specialty}\nGroup: ${this._Group}`;
        }
    }

    class ProgressClass extends GroupClass {
        constructor() {
            super();
            this._Subjects = [];
            this._Grades = [];
        }

        get Subjects() {
            return this._Subjects;
        }

        set Subjects(value) {
            this._Subjects = value;
        }

        get Grades() {
            return this._Grades;
        }

        set Grades(value) {
            this._Grades = value;
        }

        calculateAverageGrade() {
            let sum = this._Grades.reduce((total, grade) => total + grade, 0);
            return `Average Grade: ${(sum / this._Grades.length).toFixed(2)}`;
        }

        showData() {
            return `${super.showData()}\nSubjects: ${this._Subjects.join(", ")}\nGrades: ${this._Grades.join(", ")}`;
        }
    }

    let groupClassObject = new GroupClass();
    groupClassObject.Specialty = "250";
    groupClassObject.Group = "BL-31";
    console.log(groupClassObject.showData());

    let progressClassObject = new ProgressClass();
    progressClassObject.Specialty = groupClassObject.Specialty;
    progressClassObject.Group = groupClassObject.Group;
    progressClassObject.Subjects = ["Physics", "Math", "Chemistry"];
    progressClassObject.Grades = [88, 92, 95];
    console.log(progressClassObject.showData());
    console.log(progressClassObject.calculateAverageGrade());

}
