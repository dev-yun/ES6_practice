// 방법1 : promise
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => {
    console.log(response.json())});


//방법2 : async & await
async function getData (){
  const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
