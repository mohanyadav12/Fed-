// YOUR_API_KEY
//`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${YOUR_API_KEY}&limit=12`

searchBTN  = document.querySelector('.search')
inpTAG  = document.querySelector('.inpSearch')
row28  = document.querySelector('.row28')
let loadCOuntImage = 1
function generateGifHTML(result){ 
     loadCOuntImage = 1
    document.querySelector('.row28').innerHTML = ''
 result.data.forEach(function(onebyone) {
    loadCOuntImage++
    html = '';
    html += `
    <div class=" col28">
                <img src="${onebyone.images.original.url}" width='250' height='190'>
                 <a href="${onebyone.images.original.url}" class="" download>Download  - <small> ${((onebyone.images.original.size/8)/(1024 * 1024)).toFixed(2)}MB (Size)</small>   </a>
            </div> 
            `
   
    row28.innerHTML += html;
    if(loadCOuntImage === 12){
        console.log(loadCOuntImage)
        hideLoader()
    }
});

 allImages = document.querySelectorAll('.row28 img')

      
}


searchBTN.addEventListener('click',function(){
     url = `http://api.giphy.com/v1/gifs/search?q=${inpTAG.value}&api_key=${YOUR_API_KEY}&limit=12`
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        fetchedData = data;   
        showLoader()
        setTimeout(() => {
            generateGifHTML(fetchedData)  
        }, 3000);
      
        return data;  
    }).catch(function(error) {
        // console.log('Error:', error);
    });
})

function showLoader(){
    document.querySelector('.loader').classList.remove('loaded')
}

function hideLoader(){
    document.querySelector('.loader').classList.add('loaded')
}