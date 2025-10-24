// Скрипт для стилизации блока "Каталог" в sidebar
console.log('🔵 catalog-sidebar.js загружен');

function stylesCatalogBlock() {
  console.log('🔍 Ищу блок Каталог...');
  
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) {
    console.log('❌ Sidebar не найден');
    return;
  }
  console.log('✅ Sidebar найден');

  // Находим все details элементы
  const allDetails = sidebar.querySelectorAll('details');
  console.log('📋 Найдено details элементов:', allDetails.length);
  
  allDetails.forEach((details, index) => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    
    const text = summary.textContent.trim();
    console.log(`  [${index}] "${text}"`);
    
    // Если это блок "Каталог"
    if (text === 'Каталог') {
      details.classList.add('catalog-block');
      console.log('🎯 ✅ Найден блок Каталог! Добавлен класс catalog-block');
      console.log('📦 Элемент:', details);
    }
  });
}

// Пробуем сразу
stylesCatalogBlock();

// И после загрузки DOM
document.addEventListener('DOMContentLoaded', stylesCatalogBlock);

// И через небольшую задержку (на случай динамической загрузки)
setTimeout(stylesCatalogBlock, 500);
setTimeout(stylesCatalogBlock, 1000);
