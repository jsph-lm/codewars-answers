function describeTheShape(angles){
  let s = 0;
  let d = 0;
  let rounded
  if (angles <= 2) {
    return "this will be a line segment or a dot"
  }  else {
    s = angles
    d = Math.floor((angles - 2) * 180 / s)
  }
  
  return `This shape has ${s} sides and each angle measures ${d}`; // ..."This shape has x sides and each angle measures y" (degrees) 
}
