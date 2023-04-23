import axios from "axios";

export async function postProjects() {
  try {
    return await api.post()
  } catch (e) {
    console.log(e)
  }
}

export async function getFlows() {
  try {
    return await api.get('flows')
  }catch (e) {
    console.log(e)
  }
}

export async function getQualities() {
  try {
    return await api.get('qualities')
  } catch (e) {
    console.log(e)
  }
}

export async function getProjects() {
  try {
    return await api.get('projects')
  } catch (e) {
    console.log(e)
  }
}


const api = axios.create({
  baseURL: 'http://localhost:5169/api/',
  // headers: {
  //   "Access-Control-Allow-Headers": "*"
  // }
});

export default api