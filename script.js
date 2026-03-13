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
    console.log('name:', personParse.name); //accessing name from person object
}

const deleteItem = () =>{

    localStorage.removeItem('person'); //to remove an item form the storage

    localStorage.clear(); //to remove all of the items
}

// -----------------------------------------------

const applyTheme = () =>{
    let theme = localStorage.getItem('theme');

    if(theme === 'dark'){
        document.body.style.background = 'black';
    }
    else if(theme === 'light'){
        document.body.style.background = 'white';
    }
}

applyTheme();

const darkTheme = () =>{
    localStorage.setItem('theme', 'dark');
    applyTheme();    
}

const darkThemeOff = () =>{
    localStorage.setItem('theme', 'light');
    applyTheme();
}