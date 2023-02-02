import { useState } from "react";
import translate from "translate";

export default function ShowText({ text }) {
  const [hindi,setHindi] = useState([])
  async function translator(){

    if(text.length > 0){
      const mytext = await translate(text.join(" "), "hindi");

      setHindi([...mytext.split(' ')])
    }
  }
  return (
    <div>
      <h1>English</h1>
      <div
      style={{
        marginBottom: '2rem',
        width: '30rem',
        height: '10rem',
        border: '2px solid black',
        borderRadius: '10px',
        overflowX: 'visible',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <br />
      {text.length > 0
        ? text.map((x, i) => {
            return <div key={i}>{'\xa0' + x + '\xa0'}</div>;
          })
        : ''}
      
    </div>
    <h1>Hindi Translation</h1>
    <div style={{
        marginBottom: '2rem',
        width: '30rem',
        height: '10rem',
        border: '2px solid black',
        borderRadius: '10px',
        overflowX: 'visible',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    {
          hindi.length > 0 ? hindi.map((h,i)=>{
            return <div key={i}>{'\xa0' + h + '\xa0'}</div>
          }) : ""
        }
    </div>
    <div>
      <button style={{
              border: 'none',
              padding: '1.5rem',
              backgroundColor: 'green',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              marginBottom:"2rem"
            }} onClick={translator}>Translate</button>
    </div>
    </div>
  );
}
