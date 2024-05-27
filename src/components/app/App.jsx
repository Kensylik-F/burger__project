import React, { useState, useEffect, useMemo } from "react";

import '../app/styles/reset.css'
import '../app/styles/Main.css'
import BurgerMain from "../app/styles/app.module.css";

import Header from "../appHeader/header";
import BurgerIngredients from "../burgerIngredients/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burgerConstructor/constructor-burger/burgerConstructor";
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
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch (error => {
        console.error(`Ошибка загрузки ингредиентов: ${error}`);
        setIsLoading(false)
        setError(error);
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
  
  export default App;
  