function Greeting({ name = 'เพื่อนใหม่', year = 1 }) {
  return <h2>สวัสดี {name}! ชั้นปี {year}</h2>;
}
export default Greeting;
// <Greeting />              → "สวัสดี เพื่อนใหม่! ชั้นปี 1"
// <Greeting name="ฝน" />    → "สวัสดี ฝน! ชั้นปี 1"