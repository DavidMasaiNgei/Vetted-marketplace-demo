// pages/index.js
export default function Home() {
  return (
    <main style={{ padding: '4rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vetted Marketplace</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        A curated e-commerce platform where only pre-approved sellers can list products. This ensures
        quality control, builds buyer trust, and enhances the online shopping experience.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Why Vetted?</h2>
        <ul>
          <li>✅ Sellers go through a manual approval process</li>
          <li>✅ Products are categorized and reviewed for quality</li>
          <li>✅ Transparency and reliability for buyers</li>
        </ul>
      </div>

      <div style={{ marginTop: '3rem', fontStyle: 'italic', color: '#555' }}>
        <p>
          This is a prototype designed to showcase the concept to potential investors and developers.
        </p>
      </div>
    </main>
  );
}
