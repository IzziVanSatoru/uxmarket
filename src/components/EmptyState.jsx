import { h } from 'preact';

export default function EmptyState() {
  return (
    <div class="d-flex justify-content-center align-items-center py-5">
      <div class="glass-card text-center text-light px-4 py-5">
        <p class="fs-5 fw-semibold neon-text mb-2">No UX patterns yet.</p>
        <p class="small text-cyan">Start adding from the form above!</p>
      </div>

      <style scoped>{`
        .glass-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 0 0 24px rgba(0, 255, 255, 0.1);
          max-width: 400px;
          width: 100%;
        }

        .neon-text {
          color: #00ffff;
          text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff88;
        }

        .text-cyan {
          color: #a0f8ff;
        }
      `}</style>
    </div>
  );
}
