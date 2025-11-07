import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    price: "",
    image: "",
    text: ""
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add & Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/update/${editId}`, formData);
        toast.success("✅ Product Updated Successfully!");
      } else {
        await axios.post("http://localhost:5000/api/products/add", formData);
        toast.success("✅ Product Added Successfully!");
      }

      setFormData({ category: "", name: "", price: "", image: "", text: "" });
      setEditId(null);
      fetchProducts();

    } catch (error) {
      toast.error("❌ Something went wrong");
      console.log(error);
    }
    setLoading(false);
  };

  // Delete Product
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
    toast.success("🗑️ Product Deleted!");
    fetchProducts();
  };

  // Edit Button Click
  const editProduct = (product) => {
    setEditId(product._id);
    setFormData(product);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto border border-gray-300 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          {editId ? "✏️ Update Product" : "➕ Add New Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border rounded-lg" required>
            <option value="">Select Category</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
          </select>
          <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input name="image" placeholder="Image Name (apple.jpg)" value={formData.image} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input name="text" placeholder="Short Description" value={formData.text} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

          <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
            {loading ? "Saving..." : editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-auto">
        <h3 className="text-xl font-bold mb-4 text-gray-700">📦 Product List</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">₹{p.price}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2 space-x-2">
                  <button onClick={() => editProduct(p)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => deleteProduct(p._id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AddProduct;
