const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Função para obter dados de um menu específico
const fetchMenuData = async (menuEndpoint) => {
  try {
    const response = await axios.get(menuEndpoint);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao obter dados do menu ${menuEndpoint}`);
  }
};

// Agregação de Resultados
app.post('/aggregated-menu', async (req, res) => {
  try {
    const menu1 = await fetchMenuData('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-1');
    const menu2 = await fetchMenuData('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-2');
    const menu3 = await fetchMenuData('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-3');

    // Combinação dos menus
    const aggregatedData = {
      menu1,
      menu2,
      menu3,
    };

    res.json(aggregatedData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar dados agregados' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
