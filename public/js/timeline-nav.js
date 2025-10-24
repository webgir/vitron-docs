// Создаем навигацию по годам для страницы истории
(function() {
  // Проверяем, что мы на странице истории
  if (!window.location.pathname.includes('istoriya-kompanii')) {
    return;
  }

  function createTimelineNav() {
    // Находим все годы
    const years = document.querySelectorAll('.timeline__year[id]');
    if (years.length === 0) return;

    // Находим контейнер для Table of Contents
    const tocNav = document.querySelector('.right-sidebar nav');
    if (!tocNav) return;

    // Очищаем существующее содержимое
    tocNav.innerHTML = '';

    // Создаем заголовок
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = 'На этой странице';
    tocNav.appendChild(heading);

    // Создаем список
    const ul = document.createElement('ul');
    
    years.forEach(year => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${year.id}`;
      a.textContent = year.textContent;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        year.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.history.pushState(null, '', `#${year.id}`);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });

    tocNav.appendChild(ul);
  }

  // Запускаем после загрузки
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTimelineNav);
  } else {
    createTimelineNav();
  }

  // И через небольшую задержку для надежности
  setTimeout(createTimelineNav, 500);
})();
