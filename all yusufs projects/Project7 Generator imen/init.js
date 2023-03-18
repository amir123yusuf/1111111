window.onload = function(){
    
    
    const initPerson = personGenerator.getPerson();

    
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender;


    if (initPerson.gender === "Мужской") {
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderWorkOutput').innerText = initPerson.menWork;
    }else{
    document.getElementById('surnameOutput').innerText = initPerson.femSurname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstNameFem;
    document.getElementById('genderWorkOutput').innerText = initPerson.womenWork;
    };
};