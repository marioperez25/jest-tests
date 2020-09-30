async function getCars(){
    try {
        const {cars} = await fetch('http://localhost:3000/')
        return data;
    } catch(error) {
        return error;
    }
}