// for gave data
const addTime = (props) => {
    let playTime = {};
  
    //get the shopping cart from local storage
    const savePlayed = localStorage.getItem("played-item");
    if (savePlayed) {
      playTime = JSON.parse(savePlayed);
    }
  
    // add quantity
    const quantity = playTime[props];
    if (quantity) {
      const newQuantity = quantity + 1;
      playTime[props] = newQuantity;
    } else {
      playTime[props] = 1;
    }
    localStorage.setItem("played-item", JSON.stringify(playTime));
  };

  // for break time
const addToLocalStorage = (props) => {
  let breakTime = [];

  //get the time from local storage
  breakTime.push(props);
  localStorage.setItem("take-a-break", breakTime);
};

  export { addTime, addToLocalStorage };