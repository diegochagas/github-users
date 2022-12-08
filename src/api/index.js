const api = {
  get: async URL => {
   const response = await fetch(`https://api.github.com/users${URL}`)
   
   const data = await response.json()
   
   return data
  }
}

export default api