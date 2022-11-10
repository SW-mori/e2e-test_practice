import { useState } from 'react';
import './App.css';


export default function App() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  return (
    <div className="App">
      <h1>登録フォーム</h1>
      <input type="radio" id="male" name="gender" value='male'/>男性
      <input type="radio" id="female" name="gender" value="female"/>女性
      <p>メールアドレス</p>
      <input type="email" id="input-email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <p>権限
        <select id="select-role" value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="一般">一般</option>
          <option value="管理者">管理者</option>
        </select>
      </p>

      <input type="button" value="登録" id="submit" onClick={() => console.log('onClick')}></input>
      <p id="result-email">{email}</p>
      <p id="result-role">{role}</p>
    </div>
  );
}