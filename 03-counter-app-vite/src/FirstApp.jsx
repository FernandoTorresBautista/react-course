
// we can put the constants inside the component but 
// they would be reprocessed when the component autoreloads
const GetName = () => {
  // return a + b;
  return <h1>"Fernando"</h1>
}

// const newMessage = "Fernando"; // [0,1,2,3,4,5,6,7,8,9], true
// const newMessage = {} // objects are not valid like React child
const newMessage = {
  name:  'Fernando',
  age: 27,
}

export const FirstApp = () => {
  return (
    <>
        <code>{ JSON.stringify( newMessage ) }</code> 
        <p>Soy un subtitulo</p>
        <h3>{ 1 * 5 }</h3>
        <h3>{ GetName() }</h3>
    </>
  )
}
