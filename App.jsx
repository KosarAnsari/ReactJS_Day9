import Greeting from './Greeting';
import Wrapper from './Wrapper.jsx';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [formData, setFormdata] = useState({
    email: '',
    password: '',
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const [isCheck, setIscheck] = useState('false');
  const handleCheck = (e) => {
    setIscheck(e.target.checked);
  };

  const [gender, setGender] = useState('');
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const[ language,setLanguage] = useState('');
  const handleLang= (e) => {
    setLanguage(e.target.value);
  }

  return (
    <>
      <h1>Practice</h1>

      <Wrapper>
        {' '}
        <Greeting />
      </Wrapper>
      <Wrapper>
        <Greeting name={'KOSAR'} />
      </Wrapper>
      <input
        type="text"
        placeholder="type something..."
        value={text}
        onChange={handleChange}
      />
      <p>You Typed : {text}</p>
      <h2>Login Form</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your email here... "
        value={formData.email}
        onChange={handleForm}
        style={{
          padding: '8px',
          marginBottom: '10px',
          display: 'block',
          backgroundColor: '#f0f8ff',
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter the Password"
        value={formData.password}
        onChange={handleForm}
        style={{
          padding: '8px',
          marginBottom: '10px',
          display: 'block',
          backgroundColor: '#f0f8ff',
        }}
      />

      <p>Email:{formData.email}</p>
      <p>Password:{formData.password}</p>
      <h2>Handle Checkbox</h2>
      <input
        type="checkbox"
        id="checkbox"
        checked={isCheck}
        onChange={handleCheck}
      />
      <label htmlFor="checkbox">i agree to terms and conditions</label>
      {isCheck && <p> You agreed!</p>}

      <input
        type="radio"
        name="gender"
        id="male"
        value="Male"
        checked={gender === 'Male'}
        onChange={handleGender}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value="Female"
        checked={gender === 'Female'}
        onChange={handleGender}
      />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="gender"
        id="other"
        value="Other"
        checked={gender === 'Other'}
        onChange={handleGender}
      />
      <label htmlFor="other">Other</label>

      {gender && <p>You Selected:{gender}</p>}

      <h2>Favourite Language</h2>

      <div style = {{padding:"20px"}}>
        <label>Choose your favourite Language: &nbsp;
          <select value= {language} onChange={handleLang}>
            <option value="">--Select--</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </label>
        {language && <h3>Your Favourite Language is : {language}</h3>}
      </div>
    </>
  );
}
export default App;
