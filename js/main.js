document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
    const albumName = document.querySelector('input').value;
    try{
        const res = await fetch(`https://album-server-620a730b8161.herokuapp.com/api/${albumName}`);
        const data = await res.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}