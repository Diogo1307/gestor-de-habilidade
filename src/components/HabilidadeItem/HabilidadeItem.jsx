import React from 'react';
import './HabilidadeItem.css';

const HabilidadeItem = ({ habilidade, onStatusChange, onDelete, onEdit }) => {
  return (
    <div className="habilidade-item">
      <div className="habilidade-checkbox">
        <input 
          type="checkbox" 
          checked={habilidade.status} 
          onChange={() => onStatusChange(habilidade.id, !habilidade.status)}
          id={`checkbox-${habilidade.id}`}
        />
        <label 
          htmlFor={`checkbox-${habilidade.id}`}
          className={habilidade.status ? 'completed' : ''}
        >
          {habilidade.habilidade}
        </label>
      </div>
      <div className="habilidade-actions">
        <button 
          className="edit-button" 
          onClick={() => onEdit(habilidade)}
          aria-label="Editar habilidade"
        >
          ✏️
        </button>
        <button 
          className="delete-button" 
          onClick={() => onDelete(habilidade.id)}
          aria-label="Excluir habilidade"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default HabilidadeItem;
