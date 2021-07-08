const buttons = document.getElementById('button');
buttons.addEventListener("click", ()=>{
   alert('Playlist');
});

// fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
//   .then(res => res.json())
//   .then(res => console.log(res.album.artists))

//   .catch(err => err.json())
//   .catch(err => alert(err.album))

  axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then(res =>{
      console.log(res.data.album.artist);
      console.log(res.data.album.images)
    })
 //document.getElementById('sTitle')



// let textarea = (title, desc) =>{
//     title = document.getElementById('Title');
//     desc = document.getElementById('Description');
//    title.value= textarea.join("\n");
// }
// var title = ['songtitle'];
// var msg = title.join("\n");
// var area = document.getElementById("Title");
// area.value= msg;

// var desc = ['description'];
// var msg = desc.join("\n");
// var area = document.getElementById("Description");
// area.value= msg;