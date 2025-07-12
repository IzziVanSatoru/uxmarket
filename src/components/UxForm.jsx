import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function UxForm({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    app: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      onAdd(form);
      setForm({ title: '', description: '', category: '', app: '', image: '' });
    }
  };

  return (
    <form class="cyber-form mb-4 p-4 rounded-4" onSubmit={handleSubmit}>
      <h5 class="mb-3 text-cyan fw-bold">Add New UX Pattern</h5>
      
      <div class="mb-3">
        <input
          type="text"
          class="form-control neon-input"
          name="title"
          placeholder="Title"
          value={form.title}
          onInput={handleChange}
        />
      </div>
      
      <div class="mb-3">
        <textarea
          class="form-control neon-input"
          name="description"
          placeholder="Short Description"
          value={form.description}
          onInput={handleChange}
        />
      </div>

      <div class="row g-2 mb-3">
        <div class="col">
          <input
            type="text"
            class="form-control neon-input"
            name="category"
            placeholder="Category"
            value={form.category}
            onInput={handleChange}
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control neon-input"
            name="app"
            placeholder="App Name"
            value={form.app}
            onInput={handleChange}
          />
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control neon-input"
          name="image"
          placeholder="Image URL / base64"
          value={form.image}
          onInput={handleChange}
        />
      </div>

      <button type="submit" class="btn btn-cyber">💾 Save Pattern</button>

      <style scoped>{`
        .cyber-form {
          background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
          border: 1px solid rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.05);
        }

        .text-cyan {
          color: #00ffff;
        }

        .neon-input {
          background-color: #111;
          border: 1px solid #00ffff40;
          color: #fff;
        }

        .neon-input::placeholder {
          color: #00ffff88;
        }

        .neon-input:focus {
          border-color: #00ffff;
          box-shadow: 0 0 10px #00ffff66;
          background-color: #000;
        }

        .btn-cyber {
          background: linear-gradient(270deg, #00ffff, #ff00ff);
          background-size: 400% 400%;
          color: #000;
          font-weight: 600;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          animation: pulseCyber 6s ease infinite;
          box-shadow: 0 0 10px rgba(0,255,255,0.6);
        }

        .btn-cyber:hover {
          transform: scale(1.05);
          box-shadow: 0 0 16px #00ffff;
        }

        @keyframes pulseCyber {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </form>
  );
}
