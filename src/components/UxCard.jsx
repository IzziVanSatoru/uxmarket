import { h } from 'preact';

export default function UxCard({ pattern }) {
  return (
    <div class="card h-100 custom-card">
      {pattern.image && (
        <img src={pattern.image} class="card-img-top" alt={pattern.title} />
      )}
      <div class="card-body">
        <h5 class="card-title text-cyber">{pattern.title}</h5>
        <p class="card-text text-light">{pattern.description}</p>
        <span class="badge bg-cyan me-2">{pattern.category}</span>
        <span class="badge bg-purple">{pattern.app}</span>
      </div>

      <style scoped>{`
        .custom-card {
          background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .card-title.text-cyber {
          color: #00ffff;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .bg-cyan {
          background-color: #00ffff;
          color: #000;
        }

        .bg-purple {
          background-color: #a64dff;
          color: #fff;
        }

        .card-img-top {
          object-fit: cover;
          max-height: 160px;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
      `}</style>
    </div>
  );
}
