import { useState } from 'react';

export default function CreateReadPage() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    email: '',
    sizeGroup: '',
    shoeSize: '',
  });

  const shoeSizeOptions = {
    us: ['7', '7.5', '8'],
    europe: ['40', '41', '42'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', form);

    setData([...data, form]);
    // setForm({
    //   firstname: '',
    //   lastname: '',
    //   dob: '',
    //   gender: '',
    //   email: '',
    //   shoeSize: '',
    //   sizeGroup: '',
    // });
  };

  return (
    <div className="p-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 rounded border p-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="First name"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Last name"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="sizeGroup"
            value={form.sizeGroup}
            onChange={(e) => {
              setForm({ ...form, sizeGroup: e.target.value, shoeSize: '' });
            }}
            className="border p-2 rounded"
            required
          >
            <option value="">Size Group</option>
            <option value="us">US</option>
            <option value="europe">Europe</option>
          </select>

          <select
            name="shoeSize"
            value={form.shoeSize}
            onChange={handleChange}
            className="border p-2 rounded"
            required
            disabled={!form.sizeGroup}
          >
            <option value="">Shoe Size</option>
            {form.sizeGroup &&
              shoeSizeOptions[form.sizeGroup].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
      </form>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">DOB</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Shoe</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">
                {item.firstname} {item.lastname}
              </td>
              <td className="border p-2">{item.dob}</td>
              <td className="border p-2">{item.gender}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.shoeSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
