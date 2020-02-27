import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from './components/Form'
// import {DatePicker} from './components/Form/datePicker'

const initialData = {
  email: 'paulo.henr3016@gmail.com'
}

function App() {
  const formRef = useRef(null)
  function handleSubmit(data) {
    if(data.name === ''){
     formRef.current.setFieldError('name', 'O nome é obrigatório');
      
    }
    
    console.log(data);
    
    
  }
  return (
    <div className="App">
     <h1>Hello World</h1>

     <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
       <Input name="name" />
       <Input type="email" name="email" />
       <Input name="address.street" />
       <Input name="address.number" />

       <button type='submit'>Enviar</button>
     </Form>
    </div>
  );
}

export default App;
