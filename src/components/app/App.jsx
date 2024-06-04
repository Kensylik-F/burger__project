import React, { useState, useEffect, useMemo } from "react";

import '../app/styles/reset.css'
import '../app/styles/Main.css'
import BurgerMain from "../app/styles/app.module.css";
import PropTypes from 'prop-types';

import Header from "../app-header/header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/constructor-burger/burger-constructor";
import Modal from "../modal/modal/modal";
const URL = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getIngredients = (url) => {
    setIsLoading(true);
    try {
      fetch(url)
      .then(res => {  
        if (res.ok) {  
            return res.json();  
        }  
        return Promise.reject(`Ошибка ${res.status}`);  
    })  
      .then(data => {
        setData(data.data);
      })
      .catch (error => {
        console.error(`Ошибка загрузки ингредиентов: ${error}`);
        setError(error);
      })
      .finally(()=>{
        setIsLoading(false);
      })
    } 
    catch (error) {
      console.error(`Ошибка fetch(): ${error}`);
      setIsLoading(false)
      setError(error);
    }
  }

  useEffect(()=>{
      getIngredients(URL);
  }, []);

  return (
    <>
    {
      error && <div>Ошибка при загрузке: {error.message}</div>
    }
    {
      isLoading && <div>Загружается</div>
    }
    { !isLoading && !error && data &&
      <div className="App">  
            <Header/>
            <main className={BurgerMain.main}>
              <div className={BurgerMain.container}>
                <div className={BurgerMain.wrapper}>
                  <BurgerIngredients data={data}/>
                  <BurgerConstructor data={data}/>
                  <Modal/>
                </div>
              </div>
            </main>
      </div>
    }
    </>
    );

  }
  // App.propTypes = {
  //   data: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       _id: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //       type: PropTypes.string.isRequired,
  //       proteins: PropTypes.number.isRequired,
  //       fat: PropTypes.number.isRequired,
  //       carbohydrates: PropTypes.number.isRequired,
  //       calories: PropTypes.number.isRequired,
  //       price: PropTypes.number.isRequired,
  //       image: PropTypes.string.isRequired,
  //       image_mobile: PropTypes.string.isRequired,
  //       image_large: PropTypes.string.isRequired,
  //       __v: PropTypes.number.isRequired,
  //     })
  // )}
  export default App;
  