import React, { useState, useEffect } from 'react';
import HabilidadesList from '../../components/HabilidadesList/HabilidadesList';
import SearchBar from '../../components/SearchBar/SearchBar';
import AddHabilidadeModal from '../../components/AddHabilidadeModal/AddHabilidadeModal';
import './Home.css';

const Home = () => {
  const [habilidades, setHabilidades] = useState([
    {
      id: "local-1",
      habilidade: "Desenvolvimento Web",
      status: false
    },
    {
      id: "local-2",
      habilidade: "Gerenciamento de Projetos",
      status: true
    }
  ]);
  
  const [filteredHabilidades, setFilteredHabilidades] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habilidadeToEdit, setHabilidadeToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Inicializar filteredHabilidades com as habilidades iniciais
  useEffect(() => {
    setFilteredHabilidades(habilidades);
    setLoading(false);
  }, []);

  // Filtrar habilidades quando o termo de busca mudar
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredHabilidades(habilidades);
    } else {
      const filtered = habilidades.filter(item => 
        item.habilidade.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHabilidades(filtered);
    }
  }, [searchTerm, habilidades]);

  // Manipuladores de eventos
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleStatusChange = (id, newStatus) => {
    try {
      setHabilidades(habilidades.map(h => 
        h.id === id ? { ...h, status: newStatus } : h
      ));
    } catch (err) {
      setError('Erro ao atualizar status da habilidade.');
      console.error(err);
    }
  };

  const handleDelete = (id) => {
    try {
      setHabilidades(habilidades.filter(h => h.id !== id));
    } catch (err) {
      setError('Erro ao deletar habilidade.');
      console.error(err);
    }
  };

  const handleEdit = (habilidade) => {
    setHabilidadeToEdit(habilidade);
    setIsModalOpen(true);
  };

  const handleSave = (habilidadeData) => {
    try {
      if (habilidadeToEdit) {
        // Edição
        setHabilidades(habilidades.map(h => 
          h.id === habilidadeToEdit.id ? {...habilidadeData, id: habilidadeToEdit.id} : h
        ));
      } else {
        // Adição
        const newHabilidade = {
          ...habilidadeData,
          id: `local-${Date.now()}` // Gera um ID único baseado no timestamp
        };
        
        setHabilidades([...habilidades, newHabilidade]);
      }
      
      setHabilidadeToEdit(null);
    } catch (err) {
      setError(`Erro ao ${habilidadeToEdit ? 'atualizar' : 'adicionar'} habilidade.`);
      console.error(err);
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Gerenciador de Habilidades</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main className="main-content">
        {loading ? (
          <div className="loading">Carregando habilidades...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <HabilidadesList 
            habilidades={filteredHabilidades}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      </main>

      <button 
        className="add-button" 
        onClick={() => {
          setHabilidadeToEdit(null);
          setIsModalOpen(true);
        }}
        aria-label="Adicionar nova habilidade"
      >
        +
      </button>

      <AddHabilidadeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        habilidadeToEdit={habilidadeToEdit}
      />
    </div>
  );
};

export default Home;

