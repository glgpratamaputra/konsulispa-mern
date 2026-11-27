import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; // Import AppContext
import InferDiagnosis from '../components/InferDiagnosis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Diagnosa = () => {
  const navigate = useNavigate()
  const { diagnosisData, userData, token } = useContext(AppContext); // Mengakses diagnosisData dari context
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const saveDiagnosisToLocalStorage = (result) => {
    if (!userData._id) return;

    const userKey = `diagnoses_${userData._id}`;
    const savedDiagnoses = JSON.parse(localStorage.getItem(userKey)) || [];
    
    savedDiagnoses.push({
      diagnosis: result.diagnosis,
      treatment: result.treatment,
      date: new Date().toISOString(),
      answers: Object.entries(answers).map(([key, value]) => ({
        question: key,
        value: value
      }))
    });
    localStorage.setItem(userKey, JSON.stringify(savedDiagnoses));
  };


  const handleSubmit = () => {
    if (!token) {
      toast.warn('Login to diagnose')
      navigate('/login')
      return
    }

    const result = InferDiagnosis(answers, diagnosisData.rules); // Menggunakan rules dari context
    setDiagnosisResult(result);
    setShowResult(true);
    // Simpan hasil diagnosa ke localStorage
    saveDiagnosisToLocalStorage(result);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    setDiagnosisResult(null);
  };

  return (

    <div>
      <div className='flex flex-col md:flex-row my-6 gap-14 justify-center md:items-center'>
        <div>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 pb-2'>Yuk, Diagnosa Sekarang</h1>
          <p className='text-sm text-gray-600'>Jawablah pertanyaan berikut untuk membantu sistem membuat diagnosis yang akurat</p>
          <p className='text-sm text-gray-600'>
            Sudah pernah diagnosa?{" "}
            <button
              onClick={() => {
                if (!token) {
                  toast.warn("Login to check diagnose history");
                  navigate("/login");
                } else {
                  navigate("/My-Diagnosa");
                }
              }}
              className='underline text-sm text-gray-600 hover:scale-105 transition-all duration-300'
            >
              Riwayat Diagnosa
            </button>
          </p>
          <p className='text-sm text-gray-600'><span className='text-black font-semibold'>Perhatian</span> : Tidak untuk Wanita Hamil & Balita</p>
        </div>

        {/* Daftar Pertanyaan */}
        <div>
          {diagnosisData.questions.map((question) => (
            <div key={question.id}>
              <p className="font-medium mb-2 pt-3">{question.question}</p>

              {question.options ? (
                <div className="flex flex-col md:flex-row gap-2">
                  {question.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(question.key, opt === "Tidak" ? false : opt)}
                      className={`px-7 py-1 rounded-md text-sm ${answers[question.key] === (opt === "Tidak" ? false : opt)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    onClick={() => handleAnswer(question.key, true)}
                    className={`px-16 py-1 rounded-md text-sm ${answers[question.key] === true
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                  >
                    Ya
                  </button>
                  <button
                    onClick={() => handleAnswer(question.key, false)}
                    className={`px-16 py-1 rounded-md text-sm ${answers[question.key] === false
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                  >
                    Tidak
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tombol Aksi */}
          <div className="flex flex-col md:flex-row justify-center gap-3 my-6">
            <button
              onClick={handleReset}
              className="px-14 py-2 bg-gray-400 text-white rounded-md hover:scale-105 transition-all"
            >
              Reset
            </button>
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== diagnosisData.questions.length}
              className={`px-14 py-2 rounded-md text-sm ${Object.keys(answers).length === diagnosisData.questions.length
                ? 'bg-primary text-white hover:scale-105 transition-all'
                : 'bg-primary text-white cursor-not-allowed'
                }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Hasil Diagnosa */}
      {showResult && diagnosisResult && (
        <div className="p-6 border rounded-md md:mx-40 text-[15px] hover:scale-105 transition-all text-gray-600 cursor-pointer">
          <h3 className="font-medium text-lg py-2">Hasil Diagnosa:</h3>
          <p>{diagnosisResult.diagnosis}</p>
          <h3 className="font-medium text-lg mt-4 py-2">Rekomendasi Pengobatan:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {diagnosisResult.treatment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diagnosa;