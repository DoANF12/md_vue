import axios from "axios";

const Host = 'https://'

async function getCourses() {
    return await axios
    .get(`${Host}misdesarrollos.space/courses.json`,{ 

})
    .then((res) => {
    if (res.status != 200) throw new Error("Response Failed");
    return res.data;
    })  
}

export default { getCourses };