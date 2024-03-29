// dataUtils.js
const saveDataToFile = (data) => {
    // Convertir la data a formato JSON
    const jsonData = JSON.stringify(data);
    
    // Guardar la data en un archivo
    // Por ejemplo, utilizando el localStorage o el sistema de archivos del navegador
    localStorage.setItem('data', jsonData);
  };
  
  export { saveDataToFile };
  