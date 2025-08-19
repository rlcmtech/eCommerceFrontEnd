import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWithAuth } from '../APIs/userAPI';
import Login from '../Controllers/Login';

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    contains: '',
    stocksAvailable: 0,
  });

  const navigate = useNavigate(); // ✅ for programmatic navigation

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchWithAuth('/admin/products/display', { method: 'GET' });
      setProducts(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (user && user.isAdmin) loadProducts();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
      await fetchWithAuth('/admin/products/add', {
        method: 'POST',
        body: JSON.stringify(newProduct),
      });
      setNewProduct({ name: '', price: 0, description: '', contains: '', stocksAvailable: 0 });
      loadProducts();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdate = async (id, updatedFields) => {
    try {
      await fetchWithAuth(`/admin/products/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedFields),
      });
      loadProducts();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetchWithAuth(`/admin/products/delete/${id}`, { method: 'DELETE' });
      loadProducts();
    } catch (err) {
      console.error(err.message);
    }
  };

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); // 👈 redirect to homepage
  };

  if (!user) {
    return (
      <div>
        <h2>Admin Login Required</h2>
        <Login
          onloginSuccess={(loggedUser) => {
            setUser(loggedUser);
            navigate('/adminpage'); // redirect to adminpage after login
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>Add Product</h2>
      <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
      <input
        name="price"
        type="number"
        value={newProduct.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        name="description"
        value={newProduct.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input name="contains" value={newProduct.contains} onChange={handleChange} placeholder="Contains" />
      <input
        name="stocksAvailable"
        type="number"
        value={newProduct.stocksAvailable}
        onChange={handleChange}
        placeholder="Stocks"
      />
      <button onClick={handleAdd}>Add Product</button>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ₱{p.price} - Stock: {p.stocksAvailable}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
            <button
              onClick={() =>
                handleUpdate(p._id, { ...p, price: p.price + 10 }) // Example: increase price by 10
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
