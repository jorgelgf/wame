import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Header from './components/header';
import Input from './components/input';
import * as S from './themes/styles'

function App() {
  const [state,setState] = useState();
 

  const handleSubmit =  (event) => {
event.preventDefault()
const page = state.replace(/\D/g, '')
window.open(`https://wa.me/55${page}`, '_blank');
  }


    return<S.Container>
      <Header text='WaMe'/>
      <S.Item>
        <form style={{display:'flex'}} onSubmit={handleSubmit}>
      <Input onChange = {(event)=>setState(event.target.value)}text='EX.: 87-5846988'/><Button/>
      </form>
      </S.Item>
      <p></p>
    </S.Container>
  
}

export default App;
