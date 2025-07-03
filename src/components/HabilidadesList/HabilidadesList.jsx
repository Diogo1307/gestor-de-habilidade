import React from 'react';
import HabilidadeItem from '../HabilidadeItem/HabilidadeItem';
import './HabilidadesList.css';

const HabilidadesList = ({ habilidades, onStatusChange, onDelete, onEdit }) => {
  if (habilidades.length === 0) {
    return (
      <div className="habilidades-empty">
        <div className="empty-illustration">
          <img src="/empty-state.png" alt="Nenhuma habilidade encontrada" />
        </div>
        <p>Adicione Novas Habilidades</p>
      </div>
    );
  }

  return (
    <div className="habilidades-list">
      {habilidades.map((habilidade) => (
        <HabilidadeItem
          key={habilidade.id}
          habilidade={habilidade}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default HabilidadesList;
