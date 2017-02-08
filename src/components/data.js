import axios from 'axios';

export let Data = (username="",language,order="",sort="")=>{

	if(language){
		return axios.get(`https://api.github.com/search/users?q=${username}+language:${language}&sort=${sort}&order=${order}&page=1&per_page=20`)
	}else{
		return axios.get(`https://api.github.com/search/users?q=${username}&sort=${sort}&order=${order}&page=1&per_page=20`)
	}
}


   