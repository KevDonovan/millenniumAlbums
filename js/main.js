document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
    const albumName = document.querySelector('input').value;
    try{
        const res = await fetch(`/api/${albumName}`);
        const data = await res.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}