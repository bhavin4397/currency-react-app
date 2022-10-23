
import './App.css';
import Barchart from './Barchart/Barchart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form/From';


function App() {
  const [curr, setCurr] = useState({})

  useEffect(() => {
    initialData()
    if(localStorage.getItem("token")==='true'){
      setFlag(true);
      setFlag1(false)
    }
    
  }, [])

  const initialData = () => {
    axios.get("/usd").then((data) => {
      setCurr(data.data.rates)
    }).catch((err) => {
      console.log(err)
    })

  }


  const [data, setData] = useState({
    firstname: '',
    email: ''
  })
  
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')
  const [flag,setFlag]=useState(false)
  const [flag1,setFlag1]=useState(true)

  const onChangeHandler = (event) => {
    
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const getErrorHandler = () => {
    if (data.firstname == '') {
      setError1('Name is invalid')
      
    }
    if (!/^[a-zA-Z]*$/.test(data.firstname)) {
      setError1('Name is invalid');
      return true;
    }
    
    if (!/[@]/.test(data.email)) {
      setError2('Email address is invalid');
      return true;
    }
    return false;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setError1('')
    setError2('')
    if (getErrorHandler()) {
      return true;
    }
    if (error1 === '' && error2 === '') {
      setFlag(true)
      setFlag1(false)
      localStorage.setItem("token", true);
    }

    setData({
      firstname:'',
      email:''
    })

  }

  
  const onLogoutHandler=()=>{
    localStorage.setItem("token",false)
    setFlag(false)
    setFlag1(true)
  }

  
  return (
    <div className="App">
      {flag1 && <Form first={data.firstname}  email={data.email} error1={error1} error2={error2} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />}
      {flag && <Barchart list={curr} onLogoutHandler={onLogoutHandler}/>}

    </div>
  );
}

export default App;
