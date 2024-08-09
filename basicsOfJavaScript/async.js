async function callme(){
    var blob = await fetch('https://randomuser.me/api/')
    var ans = await blob.json()
     console.log(ans.results[0].name)
}
callme()