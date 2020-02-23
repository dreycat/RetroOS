export default (images: string[]) => {
  images.forEach(image => {
    const pic = new Image();
    pic.src = image;
  });
};
