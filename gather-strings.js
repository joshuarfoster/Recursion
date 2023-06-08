function gatherStrings(obj) {
    let stringArr = [];
    for (let key in obj) {
      if (typeof obj[key] === "string") stringArr.push(obj[key]);
      if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
    }
    return stringArr;
  }


module.exports = gatherStrings