const InferDiagnosis = (answers, rules) => {
  // Langkah 1: Temukan aturan yang cocok dengan jawaban pengguna
  const matchedRules = rules.filter(rule =>
    Object.entries(rule.conditions).every(([key, value]) => {
      if (Array.isArray(value)) return value.includes(answers[key]); // Jika kondisi berupa array (opsi)
      return answers[key] === value; // Jika kondisi berupa boolean atau string biasa
    })
  );

// Jika tidak ada aturan yang cocok, kembalikan hasil default
if (matchedRules.length === 0) {
  return {
    diagnosis: "Tidak ada aturan yang cocok sama sekali",
    treatment: ["Konsultasi dengan dokter"],
    combinedCF: 0
  };
}

  // Langkah 2: Hitung Certainty Factor (CF) untuk setiap aturan yang cocok
  const diagnosisMap = matchedRules.reduce((acc, rule) => {
    const diagnosisKey = rule.result.diagnosis;

    if (!acc[diagnosisKey]) {
      acc[diagnosisKey] = {
        ...rule.result,
        combinedCF: rule.result.cf // Inisialisasi CF dari aturan pertama
      };
    } else {
      // Kombinasi CF menggunakan formula Stanford
      const prevCF = acc[diagnosisKey].combinedCF;
      const newCF = rule.result.cf;

      if (prevCF >= 0 && newCF >= 0) {
        acc[diagnosisKey].combinedCF = prevCF + newCF - (prevCF * newCF);
      } else if (prevCF < 0 && newCF < 0) {
        acc[diagnosisKey].combinedCF = prevCF + newCF + (prevCF * newCF);
      } else {
        acc[diagnosisKey].combinedCF = (prevCF + newCF) / (1 - Math.min(Math.abs(prevCF), Math.abs(newCF)));
      }
    }
  
    return acc;
  }, {});

  // Langkah 3: Ambil diagnosa dengan CF tertinggi
  const finalDiagnosis = Object.values(diagnosisMap).reduce((max, curr) =>
    curr.combinedCF > max.combinedCF ? curr : max,
    { combinedCF: -Infinity }
  );

  return finalDiagnosis.combinedCF > 0
    ? finalDiagnosis
    : { diagnosis: "Aturan cocok, tingkat kepastian rendah", treatment: ["Konsultasi dengan dokter"], combinedCF: 0 };
};


export default InferDiagnosis