const crestor ='老王'
function getdooklist(){
    axios({
    url:'http://hmajax.itheima.net/api/books',
    params:{
        crestor
    }
}).then(resuits=>{
    console.log(resuits);
    // const data = resuits.data.data;
    // console.log(data);


})
}

getdooklist()