import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

// import DeleteIcon from '@material-ui/icons/Delete';

import { Techies } from './styles';

export default function Main() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  const toastList = new Set();
  const MAX_TOAST = 1;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTech === '') {
      if (toastList.size < MAX_TOAST) {
        const id = toast.error('You need to write some technology!', {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
    } else if (e.key === 'Enter') {
      setTech([...tech, newTech]);
      setNewTech('');
    }
  };

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <Techies>
      <strong>Escreva abaixo a tecnologia:</strong>
      <TextField
        id="outlined-basic"
        label="..."
        variant="outlined"
        size="small"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {/* <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
        placeholder=" ..."
      /> */}
      <Button
        variant="contained"
        color="primary"
        // size="small"
        endIcon={<Icon>send</Icon>}
        onClick={handleAdd}
      >
        Adicionar
      </Button>
      {/* <button type="button" onClick={handleAdd}>
        Adicionar à lista
      </button> */}
      <strong>Você tem {techSize} tecnologia(s):</strong>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Techies>
  );
}
