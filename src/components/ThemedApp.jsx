import React from 'react';
import ThemeContext, { THEMES } from './contexts/ThemeContext';
import Button from './components/Button';

function Header() {
  return (
    <header>
      <nav>
        <Button label='LOGIN' />
        <Button label='CADASTRO' />
        <Button label='PERFIL' />
      </nav>
    </header>
  )
}

function Card() {
  return (
    <div style={{border: '1px solid black', borderRadius: 4, padding: 16}}>
      <h1>Titulo do card</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper viverra rhoncus. Nullam faucibus ligula non nulla auctor, sit amet eleifend sapien eleifend. Suspendisse aliquam ac risus vitae condimentum. Nunc vel bibendum nisl. Mauris cras amet.</p>
      <Button label='VER CARD'/>
    </div>
  )
}

function ThemedApp() {
  const now =  new Date();
  const isDark = now.getHours() > 18;
  return (
    <div>
      <ThemeContext.Provider value={isDark ? THEMES.DARK : THEMES.LIGHT}>
        <Header />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={THEMES.DARK}>
        <Card />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={THEMES.SCHIZO}>
        <Card />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemedApp;
