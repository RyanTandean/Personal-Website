import { myProjects } from './data/project';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Ryan Tandean | Data Science @ UW</h1>
      <hr />
      
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {myProjects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.technologies.map(tech => (
                <span key={tech} style={{ marginRight: '10px', fontSize: '0.8rem', color: '#666' }}>
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;