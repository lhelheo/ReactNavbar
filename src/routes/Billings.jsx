import React, { useState } from 'react';

const Billings = () => {

  const users = [
    { id: 1, name: "Usuário A", bills: [
        { id: 1, company: "Conta de Água", value: "R$50,00", dueDate: "05/04/2024" },
        { id: 2, company: "Conta de Luz", value: "R$100,00", dueDate: "10/04/2024" },
        { id: 3, company: "Conta de Gás", value: "R$80,00", dueDate: "15/04/2024" }
      ] },
    { id: 2, name: "Usuário B", bills: [
        { id: 4, company: "Conta de Água", value: "R$60,00", dueDate: "08/04/2024" },
        { id: 5, company: "Conta de Luz", value: "R$110,00", dueDate: "12/04/2024" },
        { id: 6, company: "Conta de Gás", value: "R$90,00", dueDate: "17/04/2024" }
      ] },
    { id: 3, name: "Usuário C", 
      bills: [
        { id: 7, company: "Conta de Água", value: "R$70,00", dueDate: "20/04/2024" },
        { id: 8, company: "Conta de Luz", value: "R$120,00", dueDate: "25/04/2024" },
        { id: 9, company: "Conta de Gás", value: "R$85,00", dueDate: "30/04/2024" }
      ] },
    { id: 4, name: "Usuário D", 
      bills: [
        { id: 10, company: "Conta de Água", value: "R$75,00", dueDate: "22/04/2024" },
        { id: 11, company: "Conta de Luz", value: "R$130,00", dueDate: "27/04/2024" },
        { id: 12, company: "Conta de Gás", value: "R$95,00", dueDate: "02/05/2024" }
      ] },
    { id: 5, name: "Usuário E", bills: [
        { id: 13, company: "Conta de Água", value: "R$60,00", dueDate: "08/04/2024" },
        { id: 14, company: "Conta de Luz", value: "R$110,00", dueDate: "12/04/2024" },
        { id: 15, company: "Conta de Gás", value: "R$90,00", dueDate: "17/04/2024" }
      ] },
    { id: 6, name: "Usuário F", 
      bills: [
        { id: 13, company: "Conta de Água", value: "R$80,00", dueDate: "25/04/2024" },
        { id: 14, company: "Conta de Luz", value: "R$120,00", dueDate: "30/04/2024" },
        { id: 15, company: "Conta de Gás", value: "R$100,00", dueDate: "05/05/2024" }
      ] },
    { id: 7, name: "Usuário G", 
      bills: [
        { id: 16, company: "Conta de Água", value: "R$85,00", dueDate: "28/04/2024" },
        { id: 17, company: "Conta de Luz", value: "R$130,00", dueDate: "02/05/2024" },
        { id: 18, company: "Conta de Gás", value: "R$110,00", dueDate: "07/05/2024" }
      ] },
    { id: 8, name: "Usuário H", 
      bills: [
        { id: 19, company: "Conta de Água", value: "R$90,00", dueDate: "30/04/2024" },
        { id: 20, company: "Conta de Luz", value: "R$140,00", dueDate: "05/05/2024" },
        { id: 21, company: "Conta de Gás", value: "R$120,00", dueDate: "10/05/2024" }
      ] },
    { id: 9, name: "Usuário I", 
      bills: [
        { id: 22, company: "Conta de Água", value: "R$95,00", dueDate: "02/05/2024" },
        { id: 23, company: "Conta de Luz", value: "R$150,00", dueDate: "07/05/2024" },
        { id: 24, company: "Conta de Gás", value: "R$125,00", dueDate: "12/05/2024" }
      ] },
    { id: 10, name: "Usuário J", 
      bills: [
        { id: 25, company: "Conta de Água", value: "R$100,00", dueDate: "05/05/2024" },
        { id: 26, company: "Conta de Luz", value: "R$160,00", dueDate: "10/05/2024" },
        { id: 27, company: "Conta de Gás", value: "R$130,00", dueDate: "15/05/2024" }
      ] }
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      
      <table className="w-full text-sm text-left text-gray-600">
        
        <thead className="text-xs text-blue-400 uppercase bg-gray-200">
          <tr>
            
            <th scope="col" className="py-6 px-6">
              Usuário
            </th>
            
            <th scope="col" className="px-6">
              Contas
            </th>

          </tr>
        </thead>
        
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b bg-gray-300 border-gray-400">
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">
                
                <button className="text-blue-500" onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}>
                  Ver contas
                </button>

                {selectedUser === user.id && (
                 
                  <ul className="mt-2">
                    {user.bills.map((bill) => (
                      <li key={bill.id} className={`my-3 md:flex ${selectedUser === user.id ? 'flex' : ''}`}>
                        <span className="font-semibold">{bill.company}</span>
                        <span className='pl-4'>Valor: {bill.value}</span>
                        <span className='pl-4'>Vencimento: {bill.dueDate}</span>
                      </li>
                    ))}
                  </ul>

                )}
              </td>
            </tr>
          ))}
        </tbody>
      
      </table>
    </div>
  );
};

export default Billings;