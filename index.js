const OPTIONS = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'be3d54d51amshd1a30175d9b9666p122037jsnbd48772bd236',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
      }
};


const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`, OPTIONS)
    .then (res => res.json())
    .catch(err => console.error(err))
}

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const results = document.querySelector("#results")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const {value} = input
    if(!value) return
    const ipInfo = await fetchIpInfo(value)


    if (ipInfo){
        results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
})
