const getImg = (img) => {
  let imgUrl = null;
  try {
    imgUrl = require(`./../assets/images/${img}`);
  } catch (e) {
    /*
        if(process.env.NODE_ENV !== "production")
            console.log(e);
        else
            console.log("falling back to default(first) image")
        */
    imgUrl = require(`./../assets/images/${img.replace(
      /\/\d{1,}\.svg$/g,
      "/1.svg"
    )}`);
  }
  return imgUrl.default;
};

export default getImg;
