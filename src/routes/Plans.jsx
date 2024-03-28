import React, { useState } from 'react';

const Plans = () => {
  // Dados de exemplo para os planos
  const plans = [
    { id: 1, description: "Plano A - Descrição do Plano A" },
    { id: 2, description: "Plano B - Descrição do Plano B" },
    { id: 3, description: "Plano C - Descrição do Plano C" },
    { id: 4, description: "Plano D - Descrição do Plano D" },
    { id: 5, description: "Plano E - Descrição do Plano E" },
    { id: 6, description: "Plano F - Descrição do Plano F" },
    { id: 7, description: "Plano G - Descrição do Plano G" },
    { id: 8, description: "Plano H - Descrição do Plano H" },
    { id: 9, description: "Plano I - Descrição do Plano I" },
    { id: 10, description: "Plano J - Descrição do Plano J" }
  ];

  // Estado para controlar os planos marcados
  const [markedPlans, setMarkedPlans] = useState([]);

  // Função para marcar/desmarcar um plano
  const toggleMarked = (planId) => {

    if (markedPlans.includes(planId)) {
      setMarkedPlans(markedPlans.filter(id => id !== planId));
    } 
    else {
      setMarkedPlans([...markedPlans, planId]);
    }
    
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-8 rounded-lg">
      {plans.map((plan) => (
        
        <div key={plan.id} className={`bg-gray-100 rounded-lg p-4 sm:p-6 my-4 ${markedPlans.includes(plan.id) ? 'line-through' : ''}`}>
          <input type="checkbox" className="mr-2" onChange={() => toggleMarked(plan.id)} />
          <span className="font-semibold">{plan.description}</span>
        </div>
        
      ))}
    </div>
  );
};

export default Plans;
