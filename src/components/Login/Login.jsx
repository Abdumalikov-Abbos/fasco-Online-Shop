import React, { useEffect, useState } from 'react';
import welcomeImg from '../../Img/People/welcomeImg.svg';
import Google from '../../Img/Logo/Google.svg';
import { Link, useNavigate } from 'react-router-dom';
import Email from '../../Img/Logo/Email.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';

export default function SignIn() {
  const [email, setEmail] = useState('abdumalikovabbos@gmail.com'); // Boshlang'ich qiymat
  const [password, setPassword] = useState('password'); // Boshlang'ich qiymat
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [authError, setAuthError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/'); // Agar foydalanuvchi kirgan bo'lsa, bosh sahifaga yo'naltiramiz
    }
  }, [user, navigate]);

  useEffect(() => {
    // Formani validatsiyasini tekshirish
    setFormValid(!emailError && !passwordError && email && password);
  }, [emailError, passwordError, email, password]);

  useEffect(() => {
    if (error) {
      setAuthError(error);
    }
  }, [error]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        validateEmail(email);
        break;
      case 'password':
        setPasswordDirty(true);
        validatePassword(password);
        break;
      default:
        break;
    }
  };

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email shouldn`t be empty');
    } else if (!re.test(String(value).toLowerCase())) {
      setEmailError('It`s an incorrect email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password shouldn`t be empty');
    } else if (value.length < 3 || value.length > 8) {
      setPasswordError('Password should be 3-8 characters');
    } else {
      setPasswordError('');
    }
  };

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    setAuthError(''); // Xatolikni tozalash
  };

  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    setAuthError(''); // Xatolikni tozalash
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Barcha maydonlarni tekshirish
    setEmailDirty(true);
    setPasswordDirty(true);
    validateEmail(email);
    validatePassword(password);
    
    if (formValid) {
      try {
        await dispatch(loginUser({ email, password })).unwrap();
      } catch (err) {
        console.error('Login failed:', err);
      }
    }
  };

  return (
    <div className='flex items-center w-screen overflow-hidden'>
      <div className='flex-shrink-0 w-1/2'>
        <img src={welcomeImg} alt="" className='h-screen w-full object-cover' />
      </div>
      <div className='pl-14 pr-14 w-1/2'>
        <h2 className='flex text-5xl volkhov-bold pb-14'>FASCO</h2>
        <span className='text-xl text-black font-medium'>Sign In To FASCO</span>
        
        {/* Demo ma'lumotlar haqida eslatma */}
        <div className='mt-2 p-2 bg-blue-50 text-blue-800 text-sm rounded'>
          <p>Demo account: user@example.com / password123</p>
        </div>
        
        <div className='flex gap-8 items-center pt-8 text-black text-xl'>
          <button className='flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500'>
            <img src={Google} alt="" className='w-[42px] h-[42px]'/><span>Sign up with Google</span>
          </button>
          <button className='flex items-center gap-2 border-[1px] border-ligthSky rounded-lg pt-2 pb-2 pl-2 pr-2 hover:opacity-85 duration-500'>
            <img src={Email} alt="" /><span>Sign up with Email</span>
          </button>
        </div>
        
        <div className='flex gap-2 pt-14 justify-center items-center text-3xl font-bold text-Gray'>
          <div className='w-6 bg-Gray h-1'></div>
          <span>OR</span>
          <div className='w-6 bg-Gray h-1'></div>
        </div>
        
        {/* Auth xatoliklari */}
        {authError && (
          <div className="text-red-500 text-center mb-4">{authError}</div>
        )}
        
        <form onSubmit={handleSubmit} className='grid gap-7'>
          {(emailDirty && emailError) && (
            <div className="text-red text-sm">{emailError}</div>
          )}
          <div className='border-b pb-2 border-Gray'>
            <input 
              type="email" 
              onChange={emailHandler} 
              name='email' 
              onBlur={blurHandler} 
              value={email} 
              placeholder='Email' 
              className='outline-none w-full'
            />
          </div>
          
          {(passwordError && passwordDirty) && (
            <div className="text-red text-sm">{passwordError}</div>
          )}
          <div className='border-b pb-2 border-Gray'>
            <input 
              type="password" 
              placeholder='Password' 
              name='password' 
              className='outline-none w-full' 
              value={password} 
              onChange={passwordHandler} 
              onBlur={blurHandler}
            />
          </div>
          
          <button 
            type="submit" 
            className='text-white font-medium w-1/2 bg-black pt-4 pb-4 pr-4 pl-4 rounded-lg hover:opacity-75 duration-500 mx-auto'
            disabled={!formValid || isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        
        <div className='relative'>
          <Link to={'/register'} className='flex justify-center pt-6'>
            <button className='text-ligthSky font-medium w-1/2 border-2 rounded-lg border-ligthSky pt-3 pb-3 pr-4 pl-4 hover:bg-ligthSky hover:text-white duration-500'>
              Register Now
            </button>
          </Link>
          <Link to="/forgot-password" className='absolute right-[170px] pt-4 text-ligthSky font-medium hover:underline'>
            Forget Password?
          </Link>
        </div>
        
        <div className='absolute bottom-8 right-6'>FASCO Terms & Conditions</div>
      </div>
    </div>
  );
}