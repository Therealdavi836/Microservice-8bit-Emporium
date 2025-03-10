import { useState, useEffect } from 'react';

export default function VideogameTable() {
    const [videogames, setVideogames] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        developers_id: '',
        suppliers_id: ''
    });

    useEffect(() => {
        fetchVideogames();
        fetchDevelopers();
        fetchSuppliers();
    }, []);

    const fetchVideogames = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/videogames/');
            const data = await response.json();
            if (data && Array.isArray(data.videogames)) {
                setVideogames(data.videogames);
            } else {
                console.error("La API no devolvió un array de videojuegos:", data);
                setVideogames([]);
            }
        } catch (error) {
            console.error('Error fetching videogames:', error);
        }
    };

    const fetchDevelopers = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/developers/');
            const data = await response.json();
            if (Array.isArray(data)) {
                setDevelopers(data);
            }
        } catch (error) {
            console.error('Error fetching developers:', error);
        }
    };
    
    const fetchSuppliers = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/suppliers/');
            const data = await response.json();
            if (Array.isArray(data)) {
                setSuppliers(data);
            }
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingId ? 'PUT' : 'POST';
        const url = editingId
            ? `http://127.0.0.1:8000/api/videogames/${editingId}`
            : 'http://127.0.0.1:8000/api/videogames/';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert(editingId ? 'Videojuego actualizado con éxito' : 'Videojuego agregado con éxito');
                setFormData({ title: '', description: '', price: '', developers_id: '', suppliers_id: '' });
                setEditingId(null);
                fetchVideogames();
            } else {
                alert('Error al guardar el videojuego');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error de conexión');
        }
    };

    const handleEdit = (game) => {
        setEditingId(game.id);
        setFormData({
            title: game.title,
            description: game.description,
            price: game.price,
            developers_id: game.developers_id,
            suppliers_id: game.suppliers_id
        });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("¿Seguro que deseas eliminar este videojuego?")) return;
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/videogames/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Videojuego eliminado con éxito');
                fetchVideogames();
            } else {
                alert('Error al eliminar el videojuego');
            }
        } catch (error) {
            console.error('Error al eliminar el videojuego:', error);
            alert('Error de conexión');
        }
    };

    return (
        <div className='container mt-5'>
            <h1 className="fw-bold text-center">Lista de Videojuegos</h1>

            {/* Formulario para agregar o editar videojuego */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                    <div className="col-md-4">
                        <label className="form-label">Título</label>
                        <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <label className="form-label">Desarrollador</label>
                        <select className="form-control" name="developers_id" value={formData.developers_id} onChange={handleChange} required>
                            <option value="">Selecciona un desarrollador</option>
                            {developers.map((dev) => (
                                <option key={dev.id} value={dev.id}>{dev.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Proveedor</label>
                        <select className="form-control" name="suppliers_id" value={formData.suppliers_id} onChange={handleChange} required>
                            <option value="">Selecciona un proveedor</option>
                            {suppliers.map((sup) => (
                                <option key={sup.id} value={sup.id}>{sup.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    {editingId ? 'Actualizar Videojuego' : 'Agregar Videojuego'}
                </button>
            </form>

            {/* Tabla de videojuegos */}
            <div style={{ overflowY: 'scroll', maxHeight: '500px', border: '1px solid #ccc' }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Proveedor</th>
                            <th>Desarrollador</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videogames.length > 0 ? (
                            videogames.map((game) => (
                                <tr key={game.id}>
                                    <td>{game.id}</td>
                                    <td>{game.title}</td>
                                    <td>{game.description}</td>
                                    <td>${game.price}</td>
                                    <td>{game.suppliers_id}</td>
                                    <td>{game.developers_id}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(game)}>Editar</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(game.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No hay videojuegos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}