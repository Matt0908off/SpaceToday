async function searchNASA() {
    const query = document.getElementById('query').value;
    const apiKey = 'vqtu4YWSg4die9pnRZllSY5QmDHSAMwdTyW2UxAJ'; // Substitua pela sua chave de API da NASA
    const url = `https://images-api.nasa.gov/search?q=${query}`;
    const loadingDiv = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');
  
    // Exibe a animação de carregamento
    loadingDiv.style.display = 'flex';
    resultsDiv.innerHTML = '';
  
    try {
      // Simula o tempo de carregamento (5 segundos)
      await new Promise(resolve => setTimeout(resolve, 5000));
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.collection.items.length === 0) {
        displayNoResults();
      } else {
        displayResults(data.collection.items);
      }
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      // Esconde a animação de carregamento
      loadingDiv.style.display = 'none';
    }
  }
  
  function displayResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    items.forEach(item => {
      const title = item.data[0].title;
      const imgSrc = item.links ? item.links[0].href : '';
      const description = item.data[0].description || 'Sem descrição disponível';
  
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${title}</h3>
        <img src="${imgSrc}" alt="${title}">
        <p>${description}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
  
  function displayNoResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="no-results">
        <p>🚀 Oops! Nenhum resultado encontrado...</p>
        <p>Tente buscar algo como "lua" ou "marte" e continue explorando o universo! 💫</p>
      </div>
    `;
  }
  function createStars() {
    const starContainer = document.getElementById('background-stars');
    const starCount = 100; // Número de estrelas
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starContainer.appendChild(star);
    }
  }
  
  // Gera as estrelas ao carregar a página
  window.onload = createStars;