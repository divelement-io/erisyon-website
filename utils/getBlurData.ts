
export default function getBlurData(src = '') {
  return `/_next/image?url=${encodeURI(src)}&w=64&q=50`;
}
