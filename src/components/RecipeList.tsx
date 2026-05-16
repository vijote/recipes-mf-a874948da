// Interfaz para simular datos de recetas
interface Recipe {
  id: number;
  title: string;
  time: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
}

const mockRecipes: Recipe[] = [
  { id: 1, title: 'Tacos al Pastor', time: '45 min', difficulty: 'Media' },
  { id: 2, title: 'Pasta Carbonara Auténtica', time: '20 min', difficulty: 'Fácil' },
  { id: 3, title: 'Suflé de Chocolate', time: '35 min', difficulty: 'Difícil' },
];

export default function RecipesList() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🍳 Módulo Remoto: Listado de Recetas</h2>
      <p style={styles.subtitle}>Este componente se está renderizando desde el Microfrontend "recipes".</p>
      
      <div style={styles.grid}>
        {mockRecipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <h3 style={styles.recipeTitle}>{recipe.title}</h3>
            <div style={styles.meta}>
              <span style={styles.badge}>⏱️ {recipe.time}</span>
              <span style={{
                ...styles.badge, 
                backgroundColor: recipe.difficulty === 'Fácil' ? '#d4edda' : recipe.difficulty === 'Media' ? '#fff3cd' : '#f8d7da',
                color: recipe.difficulty === 'Fácil' ? '#155724' : recipe.difficulty === 'Media' ? '#856404' : '#721c24'
              }}>
                📊 {recipe.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos rápidos en línea para no depender de archivos CSS externos en la federación
const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    border: '2px dashed #4B5563', // Borde punteado para notar visualmente que es remoto
    margin: '10px 0',
  },
  title: {
    margin: '0 0 5px 0',
    color: '#1f2937',
  },
  subtitle: {
    margin: '0 0 20px 0',
    color: '#6b7280',
    fontSize: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb',
  },
  recipeTitle: {
    margin: '0 0 10px 0',
    fontSize: '16px',
    color: '#111827',
  },
  meta: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
  },
  badge: {
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
  }
};