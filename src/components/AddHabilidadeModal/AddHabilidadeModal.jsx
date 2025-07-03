import React, { useState, useEffect } from 'react';
import './AddHabilidadeModal.css';

const AddHabilidadeModal = ({ isOpen, onClose, onSave, habilidadeToEdit }) => {
  const [habilidade, setHabilidade] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (habilidadeToEdit) {
      setHabilidade(habilidadeToEdit.habilidade);
      setIsEditing(true);
    } else {
      setHabilidade('');
      setIsEditing(false);
    }
  }, [habilidadeToEdit, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!habilidade.trim()) return;
    
    if (isEditing) {
      onSave({
        ...habilidadeToEdit,
        habilidade: habilidade.trim()
      });
    } else {
      onSave({
        habilidade: habilidade.trim(),
        status: false
      });
    }
    
    setHabilidade('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{isEditing ? 'Editar Habilidade' : 'Nova Habilidade'}</h2>
          <button className="close-button" onClick={onClose} aria-label="Fechar">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Digite uma nova habilidade"
              value={habilidade}
              onChange={(e) => setHabilidade(e.target.value)}
              autoFocus
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="save-button">
              {isEditing ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabilidadeModal;
