function ImageWebP({
  srcNormal,
  srcWebP,
  imgType,
  alt,
  ...attributes
}) {
  const typeMapper = {
    'jpg': 'jpeg',
    'png': 'png',
    'webp': 'webp',
  }
  const type = `image/${typeMapper[imgType]}`;
  return (
    <div>
      <picture width={attributes.width} height={attributes.height}>
        <source type="image/webp" srcSet={srcWebP} />
        <source type={type} srcSet={srcNormal}/>
        <img src={srcNormal} alt={alt} style={{"maxWidth":"100%","height":"auto"}} {...attributes}  />
      </picture>
    </div>
  )
}

export default ImageWebP;
