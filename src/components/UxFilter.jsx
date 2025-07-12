import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function UxFilter({ onFilterChange, categories, apps }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedApp, setSelectedApp] = useState('');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilterChange('category', value);
  };

  const handleAppChange = (e) => {
    const value = e.target.value;
    setSelectedApp(value);
    onFilterChange('app', value);
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedApp('');
    onFilterChange('category', '');
    onFilterChange('app', '');
  };

  return (
    <div class="card card-body mb-4 cyber-filter">
      <div class="row g-2 align-items-center">
        <div class="col-md-5">
          <select class="form-select neon-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Filter by Category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div class="col-md-5">
          <select class="form-select neon-select" value={selectedApp} onChange={handleAppChange}>
            <option value="">Filter by App</option>
            {apps.map((app) => (
              <option key={app} value={app}>{app}</option>
            ))}
          </select>
        </div>
        <div class="col-md-2 text-end">
          <button class="btn btn-rgb" onClick={handleReset}>Reset</button>
        </div>
      </div>

      <style scoped>{`
        .cyber-filter {
          background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
          border: 1px solid rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.05);
        }

        .neon-select {
          background-color: #111;
          border: 1px solid #00ffff40;
          color: #fff;
        }

        .neon-select option {
          background-color: #111;
          color: #00ffff;
        }

        .neon-select:focus {
          border-color: #00ffff;
          box-shadow: 0 0 10px #00ffff66;
        }

        .btn-rgb {
          background: linear-gradient(270deg, #00ffff, #ff00ff, #00ff00, #00ffff);
          background-size: 600% 600%;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          padding: 8px 20px;
          animation: rgbCycle 6s ease infinite;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          transition: transform 0.3s ease;
        }

        .btn-rgb:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px #00ffff;
        }

        @keyframes rgbCycle {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
