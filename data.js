

export  function conectionAPP(data){
  // setTimeout(() => {
    let fet=fetch(data)
  .then(res=>res.json())
  .then(res=>res)
 
return fet;
  // },100);

  }


