const getInfo=async() =>{
    const data=await fetch("./data/index.json");
    const info=await data.json()
    console.log(info)
}

getInfo()