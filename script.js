// const loading = document.getElementById("loading");
// const container = document.getElementById("container");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(value){
//    if(!value.ok){
//     throw new Error("خطا در برقراری");
   
//    } return value.json();
   
// }).then(function(posts){
//   loading.style.display = "none";
// for(const post of posts){
//   const card = document.createElement("div");
//   card.innerHTML = `
//   <P><strong>id:</strong> ${post.id}</p>
//   <P><strong>title:</strong> ${post.title}</p>
//   <P><strong>body:</strong> ${post.body}</p>
//   `
//   card.classList.add("card")
//   container.appendChild(card);
// }
// });

const loading = document.getElementById("loading");
const container = document.getElementById("container");
 async function getposts(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
     if(!response.ok){
      throw new Error("خطا"+response.status);
      
     }const posts = await response.json();
     loading.style.display = "none";
     for(const post of posts){
      const card = document.createElement("div");
      card.innerHTML = `
        <p><strong>id:</strong> ${post.id}</p>
        <p><strong>title:</strong> ${post.title}</p>
        <p><strong>body:</strong> ${post.body}</p>`
        card.classList.add("card");
        container.appendChild(card);
     }
  }catch(error)
  {
    loading.textContent = error.message;
    loading.style.color = "red";
  }
 }getposts();
