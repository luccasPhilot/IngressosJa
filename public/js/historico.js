async function fetchTickets() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/Vendas/usuario', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        const ticketsList = document.getElementById('tickets-list');
        ticketsList.innerHTML = '';
        
        data.forEach(venda => {
            venda.ingressos.forEach(ingresso => {
                const ticketDiv = document.createElement('div');
                ticketDiv.classList.add('ticket');
                ticketDiv.innerHTML = `
                    <p><strong>Evento:</strong> ${ingresso.nome}</p>
                    <p><strong>Quantidade:</strong> ${ingresso.qtd}</p>
                    <p><strong>Data da Compra:</strong> ${new Date(venda.createdAt).toLocaleDateString('pt-BR')}</p>
                    <button onclick="verMais('${ingresso.nome}')">Ver Mais</button>
                `;
                ticketsList.appendChild(ticketDiv);
            });
        });
    } catch (error) {
        console.error('Erro ao buscar os ingressos:', error);
    }
}

function verMais(evento) {
    window.location.assign(`/ingresso/${encodeURIComponent(evento)}`);
}

fetchTickets();
