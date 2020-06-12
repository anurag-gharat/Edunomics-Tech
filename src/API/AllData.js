import axios from 'axios'

export const getOurTeam=()=>{
        return axios.get("https://edunomics.herokuapp.com/api/tech/aboutus")
                .then(response=>{return response.data})
                .catch(error=>{return error})
}

//for getting all solutions 
export const getAllSolutions=async()=>{
        try{
              const res=await axios.get('https://edunomics.herokuapp.com/api/tech/solutions')  
                return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}

//for getting business 
export const getAllBusiness=async()=>{
        try{
              const res=await axios.get('https://edunomics.herokuapp.com/api/tech/business')  
                return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}

//for getting all services
export const getAllServices=async()=>{
        try{
              const res=await axios.get('https://edunomics.herokuapp.com/api/tech/service')  
                return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}



//for getting all blogs
export const getAllBlogs=async()=>{
        try{
              const res=await axios.get('https://edunomics.herokuapp.com/api/tech/blog')  
              
              return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}