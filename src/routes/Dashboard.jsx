const Dashboard = () => {
  // Dados de exemplo para a tabela
  const dados = [
    { id: 1, nome: "Produto A", preco: "R$10,00", estoque: 20, categoria: "Alimentos", validade: "01/01/2025" },
    { id: 2, nome: "Produto B", preco: "R$15,00", estoque: 15, categoria: "Bebidas", validade: "01/06/2024" },
    { id: 3, nome: "Produto C", preco: "R$20,00", estoque: 5, categoria: "Limpeza", validade: "15/03/2023" },
    { id: 4, nome: "Produto D", preco: "R$25,00", estoque: 10, categoria: "Eletrônicos", validade: "01/01/2027" },
    { id: 5, nome: "Produto E", preco: "R$30,00", estoque: 8, categoria: "Alimentos", validade: "10/10/2024" },
    { id: 6, nome: "Produto F", preco: "R$35,00", estoque: 12, categoria: "Bebidas", validade: "20/07/2025" },
    { id: 7, nome: "Produto G", preco: "R$40,00", estoque: 7, categoria: "Limpeza", validade: "05/05/2023" },
    { id: 8, nome: "Produto H", preco: "R$45,00", estoque: 14, categoria: "Eletrônicos", validade: "01/12/2026" },
    { id: 9, nome: "Produto I", preco: "R$50,00", estoque: 9, categoria: "Alimentos", validade: "15/08/2024" },
    { id: 10, nome: "Produto J", preco: "R$55,00", estoque: 6, categoria: "Bebidas", validade: "30/09/2025" }
  ];
  

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-blue-400 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="py-6 px-6">
              Produto
            </th>
            <th scope="col" className="px-6">
              Preço
            </th>
            <th scope="col" className="px-6">
              Estoque
            </th>
            <th scope="col" className="px-6">
              Categoria
            </th>
            <th scope="col" className="px-6">
              Validade
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="border-b bg-gray-300 border-gray-400">
              <td className="py-3 px-6">{item.nome}</td>
              <td className="py-3 px-6">{item.preco}</td>
              <td className="py-3 px-6">{item.estoque}</td>
              <td className="py-3 px-6">{item.categoria}</td>
              <td className="py-3 px-6">{item.validade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;