function padIt(str,n){
  //coding here
  let count = 0;
  while (count < n )
    {
      if  (count % 2 == 0) {
        str = `*${str}`;
      } else {
        str = `${str}*`;
      }
    count ++;      
    }
  
  return str;
}
