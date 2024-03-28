import React, { useState } from 'react';

const Properties = () => {
  const [performanceMode, setPerformanceMode] = useState(false);
  const [siteActive, setSiteActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('Portuguese');
  const [spellCheck, setSpellCheck] = useState('basic');

  const togglePerformanceMode = () => {
    setPerformanceMode(!performanceMode);
    setSiteActive(false); // Reset site active when changing performance mode
  };

  const toggleSiteActive = () => {
    setSiteActive(!siteActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSpellCheckChange = (event) => {
    setSpellCheck(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 mx-auto rounded-lg shadow- s p-10">

      <div className='p-10 m-3 bg-white rounded-lg'>
        <h2 className='font-bold text-xl'>Desempenho</h2>
        <div className='flex flex-col gap-2'>
          
          <div className='flex gap-2 bg-blue-200 rounded-lg p-1'>
            <label htmlFor="performanceMode">Modo Econômico</label>
            <input
              type="checkbox"
              id="performanceMode"
              checked={performanceMode}
              onChange={togglePerformanceMode}
            />
          </div>

          <div className='flex gap-2 bg-blue-200 rounded-lg p-1'>
            <label htmlFor="siteActive">Manter Site Ativo</label>
            <input
              type="checkbox"
              id="siteActive"
              checked={siteActive}
              onChange={toggleSiteActive}
            />
          </div>

        </div>
      </div>

      <div className='p-10 m-3 bg-white rounded-lg'>
        
        <h2 className='font-bold text-xl'>Aspecto</h2>
        <div className='flex flex-col gap-2'>
          
          <div className='flex gap-2 bg-blue-200 rounded-lg p-1 mx-auto'>
            <label htmlFor="darkMode">Modo Escuro</label>
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>

          <div className='flex gap-2 bg-blue-200 rounded-lg p-1'>
            <label htmlFor="fontSize">Tamanho da Letra</label> 
            
            <select id="fontSize" value={fontSize} className='rounded-lg' onChange={handleFontSizeChange}>
              <option value="small">Pequeno</option>
              <option value="medium">Médio</option>
              <option value="large">Grande</option>
            </select>

          </div>

        </div>
      </div>

      <div className='p-10 m-3 bg-white rounded-lg'>

        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl'>Língua</h1>
            
            <div className='flex gap-2 bg-blue-200 rounded-lg p-1 mx-auto'>

              <label htmlFor="language">Idioma</label> 
              
              <select id="language" value={language} className="rounded-lg" onChange={handleLanguageChange}>
                <option value="Portuguese">Português</option>
                <option value="English">Inglês</option>
                <option value="Chinese">Chinês</option>
              </select>

            </div>

            <div className='flex gap-2 bg-blue-200 rounded-lg p-1'>
              
              <label htmlFor="spellCheck">Verificação Ortográfica</label>
              
              <select id="spellCheck" value={spellCheck} className='rounded-lg' onChange={handleSpellCheckChange}>
                <option value="basic">Básico</option>
                <option value="advanced">Avançado</option>
              </select>
              
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Properties;
