import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import UxCard from './components/UxCard';
import UxForm from './components/UxForm';
import UxFilter from './components/UxFilter';
import UxExport from './components/UxExport';
import EmptyState from './components/EmptyState';
import { loadPatterns, savePatterns, STORAGE_KEY } from './utils/storage';
import { categories } from './data/categories';
import dummyData from '../json/dummy.json';

export default function App() {
  const [patterns, setPatterns] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ category: '', app: '' });

  useEffect(() => {
    const isDeleted = localStorage.getItem('uxmarket_deleted');
    let stored = loadPatterns();

    if (!isDeleted && stored.length === 0) {
      savePatterns(dummyData);
      stored = dummyData;
    }

    setPatterns(stored);
    setFiltered(stored);
  }, []);

  const handleAdd = (newPattern) => {
    const updated = [...patterns, { ...newPattern, id: Date.now().toString() }];
    setPatterns(updated);
    setFiltered(updated);
    savePatterns(updated);
    localStorage.removeItem('uxmarket_deleted'); // reset flag jika tambah lagi
  };

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);

    let filteredData = [...patterns];
    if (newFilters.category) {
      filteredData = filteredData.filter(p => p.category === newFilters.category);
    }
    if (newFilters.app) {
      filteredData = filteredData.filter(p => p.app === newFilters.app);
    }
    setFiltered(filteredData);
  };

  const handleDeleteAll = () => {
    if (confirm('Yakin mau hapus semua UX pattern?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem('uxmarket_deleted', 'true'); // tandai udah dihapus
      setPatterns([]);
      setFiltered([]);
    }
  };

  const allApps = [...new Set(patterns.map(p => p.app))];

  return (
    <div class="container py-5 position-relative">
      <h1 class="text-white fw-bold mb-4 text-center">UXMARKET</h1>

      <UxForm onAdd={handleAdd} />
      <UxFilter onFilterChange={handleFilterChange} categories={categories} apps={allApps} />

      <div class="d-flex flex-wrap gap-2 mb-4">
        <UxExport data={patterns} />
        <button class="btn rgb-delete-btn" onClick={handleDeleteAll}>
          🗑️ Delete All
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div class="row g-4">
          {filtered.map((p) => (
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex" key={p.id}>
              <UxCard pattern={p} />
            </div>
          ))}
        </div>
      )}

      <style scoped>{`
        .container {
          min-height: 100vh;
          animation: parallax 25s linear infinite;
        }

        @keyframes parallax {
          0% { background-position-y: 0; }
          100% { background-position-y: 200px; }
        }

        .rgb-delete-btn {
          background: linear-gradient(270deg, #ff007f, #7f00ff, #00ffff, #00ff00);
          background-size: 600% 600%;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          animation: rainbowGlow 6s ease infinite;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
          transition: transform 0.3s ease;
        }

        .rgb-delete-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        }

        @keyframes rainbowGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
