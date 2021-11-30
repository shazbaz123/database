const fs = require("fs");

const addMovie = (movieObj) => {
    try{
        const stringyObj = JSON.stringify(movieObj);
        fs.writeFileSync('./storage.json', stringyObj);
    }
    catch (e){
    console.log(e);
    }
};

const listMovie = () => {
    try{
        const jsonList = fs.readFileSync('./storage.json');
        const list = JSON.parse(jsonList);
        console.log(list);
    }
    catch(e){
        console.log(e);
    }
};

module.exports = {addMovie, listMovie};