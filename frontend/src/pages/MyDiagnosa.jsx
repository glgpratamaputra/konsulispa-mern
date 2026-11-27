import React, { useEffect, useContext } from 'react';
import { AppContext } from "../context/AppContext"; // Mengimpor AppContext


const MyDiagnosa = () => {
  const { history, setHistory, token, userData } = useContext(AppContext); // Mengakses history dan setHistory dari context

  useEffect(() => {
    // Ambil data dari localStorage saat komponen dimuat
    if (!userData._id) return;
    const userKey = `diagnoses_${userData._id}`;
    const savedDiagnoses = JSON.parse(localStorage.getItem(userKey)) || [];
    setHistory(savedDiagnoses);
  }, [setHistory, userData]);

  // Fungsi untuk menghapus satu entri riwayat
  const handleDeleteEntry = (index) => {
    const updatedHistory = history.filter((_, idx) => idx !== index);
    setHistory(updatedHistory);
    const userKey = `diagnoses_${userData._id}`;
    localStorage.setItem(userKey, JSON.stringify(updatedHistory));
  };

  // Fungsi untuk menghapus semua riwayat
  const handleDeleteAll = () => {
    setHistory([]);
    const userKey = `diagnoses_${userData._id}`;
    localStorage.removeItem(userKey);
  };

  return (
    <div>
      <p className='text-gray-600'>Riwayat diagnosa Anda</p>

      {history.length === 0 ? (
        <p className="text-center text-gray-600 mt-40 mb-96">Belum ada riwayat diagnosa, silahkan diagnosa terlebih dahulu</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg mt-5">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-300">No</th>
                <th className="px-4 py-2 border border-gray-300">Tanggal</th>
                <th className="px-4 py-2 border border-gray-300">Diagnosa</th>
                <th className="px-4 py-2 border border-gray-300">Pengobatan</th>
                <th className="px-4 py-2 border border-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index} className='text-gray-600'>
                  <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {new Date(entry.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{entry.diagnosis}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <ul className="list-disc list-inside">
                      {entry.treatment.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='py-2 text-center border border-gray-300'>
                    <button
                      onClick={() => handleDeleteEntry(index)}
                      className="px-3 py-1 bg-primary text-white rounded hover:bg-pink-300"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Tombol untuk menghapus semua riwayat */}
      {
        history.length > 0 && (
          <div className="flex justify-center mt-4 mb-96">
            <button
              onClick={handleDeleteAll}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-pink-300"
            >
              Hapus Semua Riwayat
            </button>
          </div>
        )
      }
    </div>
  )
}



export default MyDiagnosa;
