class Translate extends React.Component{

    

    translate(){
        const API_KEY = 'trnsl.1.1.20190724T223624Z.669fa18d8bc4ae8a.5c934ea5c18c7f2b9e67ad43af2d9ab09fe470ab'
        const sl = 'pt' //source linguage
        const tl = 'en' //translate linguage
        const tl2 = 'es' //translate linguage
        var text = document.getElementById('text').value
        var url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${text}&lang=${sl}-${tl}`
        var url2 = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${text}&lang=${sl}-${tl2}`
      
      fetch(url)
          .then(res => res.json())
          .then(json => 
            document.getElementById('en-translation').innerHTML = json.text)
            //console.log(json.text))
      
          fetch(url2)
          .then(res => res.json())
          .then(json => 
            document.getElementById('es-translation').innerHTML = json.text)
            //console.log(json.text)
    }
}

module.exports = new Translate()