// Добавляем класс к блоку "Каталог" для стилизации
(function() {
  function addCatalogClass() {
    // Находим все summary элементы в sidebar
    const summaries = document.querySelectorAll('.sidebar summary');
    
    summaries.forEach(summary => {
      if (summary.textContent.trim() === 'Каталог') {
        // Добавляем класс к родительскому details элементу
        const details = summary.closest('details');
        if (details) {
          details.classList.add('catalog-block');
        }
      }
    });
  }
  
  // Запускаем после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCatalogClass);
  } else {
    addCatalogClass();
  }
})();
