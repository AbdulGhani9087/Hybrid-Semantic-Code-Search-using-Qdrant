import { useEffect, useState } from 'react';

const BASE_URL = 'http://127.0.0.1:8000';

const useSettings = (requestConfirm, requestAlert, authFetch) => {
  const [qdrantUrl, setQdrantUrl] = useState('');
  const [collectionName, setCollectionName] = useState('code_search');
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [embeddingModel, setEmbeddingModel] = useState('BAAI/bge-small-en-v1.5');
  const [semanticWeight, setSemanticWeight] = useState(0.7);
  const [overfetchMultiplier, setOverfetchMultiplier] = useState(5);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const resp = await authFetch(`${BASE_URL}/settings`);
        if (resp.ok) {
          const data = await resp.json();
          setQdrantUrl(data.qdrant_url || 'local');
          setCollectionName(data.collection_name || 'code_search');
          setEmbeddingModel(data.embedding_model || 'BAAI/bge-small-en-v1.5');
          setSemanticWeight(data.semantic_weight ?? 0.7);
          setOverfetchMultiplier(data.overfetch_multiplier ?? 5);
        }
      } catch {
        // Ignore initial settings failures; defaults remain.
      }
    };

    fetchSettings();
  }, [authFetch]);

  // Fix #1: Actually ping the backend instead of faking success
  const handleTestConnection = async () => {
    setIsTestingConnection(true);
    setConnectionStatus(null);
    try {
      const resp = await authFetch(`${BASE_URL}/info`);
      if (resp.ok) {
        setConnectionStatus('success');
      } else {
        setConnectionStatus('error');
      }
    } catch {
      setConnectionStatus('error');
    } finally {
      setIsTestingConnection(false);
    }
  };

  const handleResetSettings = async () => {
    const isConfirmed = await requestConfirm(
      "Reset Settings",
      "Are you sure you want to reset all settings to their defaults?",
      true
    );
    if (isConfirmed) {
      setSemanticWeight(0.7);
      setOverfetchMultiplier(5);
      setEmbeddingModel('BAAI/bge-small-en-v1.5');
      setQdrantUrl('local');
      setCollectionName('code_search');
    }
  };

  const handleSaveSettings = async () => {
    setIsSavingSettings(true);
    try {
      const resp = await authFetch(`${BASE_URL}/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          qdrant_url: qdrantUrl === 'local' ? null : qdrantUrl,
          collection_name: collectionName,
          embedding_model: embeddingModel,
          semantic_weight: semanticWeight,
          overfetch_multiplier: overfetchMultiplier
        })
      });

      if (resp.ok) {
        requestAlert('Settings Saved', 'Connection and search settings have been updated.');
      } else {
        const err = await resp.json().catch(() => ({}));
        requestAlert('Error', err.detail || 'Failed to save settings.', true);
      }
    } catch (e) {
      requestAlert('Error', `Network error: ${e.message}`, true);
    } finally {
      setIsSavingSettings(false);
    }
  };

  // Fix #2: Actually call the backend to clear the collection
  const handleDeleteCollection = async () => {
    const isConfirmed = await requestConfirm(
      "Delete Collection",
      "CRITICAL: This will permanently delete all vectorized data from the collection. Are you absolutely sure?",
      true
    );
    if (!isConfirmed) return;

    try {
      const resp = await authFetch(`${BASE_URL}/debug-clear`);
      if (resp.ok) {
        const data = await resp.json();
        requestAlert("Collection Cleared", data.message || "All non-sample vectors have been deleted.");
      } else {
        const err = await resp.json().catch(() => ({}));
        requestAlert("Error", `Failed to delete collection: ${err.detail || resp.statusText}`, true);
      }
    } catch (e) {
      requestAlert("Error", `Network error: ${e.message}`, true);
    }
  };

  return {
    qdrantUrl, setQdrantUrl,
    collectionName, setCollectionName,
    isTestingConnection, connectionStatus,
    handleTestConnection,
    embeddingModel, setEmbeddingModel,
    semanticWeight, setSemanticWeight,
    overfetchMultiplier, setOverfetchMultiplier,
    isSavingSettings, handleSaveSettings,
    handleDeleteCollection, handleResetSettings
  };
};

export default useSettings;
