import axios from 'axios'



export const getOurTeam=()=>{
        return axios.get("https://edunomics.herokuapp.com/api/tech/aboutus")
                .then(response=>{return response.data})
                .catch(error=>{return error})
}