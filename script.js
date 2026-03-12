const setDataToLS = () =>{
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem('number', number);
}

const getDataFromLS = () =>{
    const numberFromLS = localStorage.getItem('number');
    console.log(numberFromLS);
}

const setStringToLS = () =>{
    localStorage.setItem('name', 'Chanchal');
}

const getStringFromLS = () =>{
    console.log(localStorage.getItem('name'));
}

const setObjectToLS = () =>{
    const person = {
        name: "Chanchal",
        age: 26,
        address: "Noakhali, Bangladesh",
    };
    const personJSON = JSON.stringify(person);
    localStorage.setItem('person', personJSON);
    // console.log(person);

}

const getObjectFromLS = () =>{
    const personJSON = localStorage.getItem('person');
    const personParse = JSON.parse(personJSON);
    console.log(personParse);
}