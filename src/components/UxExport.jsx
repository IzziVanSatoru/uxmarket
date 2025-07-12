import { h } from 'preact';
import jsPDF from 'jspdf';

export default function UxExport({ data }) {
  const handleExport = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });

    // 1. Salin ke clipboard
    navigator.clipboard.writeText(json);

    // 2. Unduh PDF
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(json, 180);
    doc.text(lines, 10, 10);
    doc.save('ux_patterns.pdf');

    // 3. Unduh CSV
    const headers = ['Title', 'Description', 'Category', 'App'];
    const rows = data.map(item => [
      `"${item.title}"`,
      `"${item.description}"`,
      item.category,
      item.app
    ]);

    const csv = [headers, ...rows].map(e => e.join(',')).join('\n');
    const csvBlob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(csvBlob);
    link.download = 'ux_patterns.csv';
    link.click();

    alert('📋 Copied to clipboard, downloaded as PDF & CSV!');
  };

  return (
    <button class="btn rgb-export-btn" onClick={handleExport}>
      🔻 Export JSON / PDF / CSV
      <style scoped>{`
        .rgb-export-btn {
          background: linear-gradient(270deg, #00ffff, #7f00ff, #ff007f, #00ff00);
          background-size: 600% 600%;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          animation: rainbowExport 6s ease infinite;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
          transition: transform 0.3s ease;
        }

        .rgb-export-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        }

        @keyframes rainbowExport {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </button>
  );
}
