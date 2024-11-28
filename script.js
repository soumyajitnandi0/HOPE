// Redirect to Blood Input Page
function redirectToBloodInput() {
    window.location.href = "report.html";
}

// Analyze Blood Parameters
function analyzeBlood() {
    // Fetch values from the form
    const rbc = parseFloat(document.getElementById("rbc").value);
    const hemoglobin = parseFloat(document.getElementById("hemoglobin").value);
    const wbc = parseFloat(document.getElementById("wbc").value);
    const neutrophils = parseFloat(document.getElementById("neutrophils").value);
    const eosinophils = parseFloat(document.getElementById("eosinophils").value);
    const basophils = parseFloat(document.getElementById("basophils").value);
    const platelet = parseFloat(document.getElementById("platelet").value);

    // Disease Analysis
    let diseases = [];

    // RBC Count
    if (rbc < 4.7) diseases.push("Low RBC: Anemia or Nutritional Deficiency (Iron, Vitamin B12)");
    else if (rbc > 6.1) diseases.push("High RBC: Polycythemia or Dehydration");

    // Hemoglobin
    if (hemoglobin < 13.5) diseases.push("Low Hemoglobin: Iron-Deficiency Anemia, Blood Loss, or Chronic Kidney Disease");
    else if (hemoglobin > 17.5) diseases.push("High Hemoglobin: Polycythemia Vera or Heart/Lung Disease");

    // WBC Count
    if (wbc < 4000) diseases.push("Low WBC: Leukopenia due to Viral Infections or Bone Marrow Disorders");
    else if (wbc > 11000) diseases.push("High WBC: Leukocytosis caused by Infection, Inflammation, or Leukemia");

    // Neutrophils
    if (neutrophils < 55) diseases.push("Low Neutrophils: Neutropenia due to Bone Marrow Failure or Chemotherapy");
    else if (neutrophils > 70) diseases.push("High Neutrophils: Bacterial Infection, Stress, or Inflammation");

    // Eosinophils
    if (eosinophils < 1) diseases.push("Low Eosinophils: Rarely Significant but could indicate Cushing's Syndrome");
    else if (eosinophils > 5) diseases.push("High Eosinophils: Allergic Reaction or Parasitic Infection");

    // Basophils
    if (basophils < 0.5) diseases.push("Low Basophils: Acute Allergic Reactions or Hyperthyroidism");
    else if (basophils > 1) diseases.push("High Basophils: Chronic Inflammation, Leukemia, or Hypothyroidism");

    // Platelet Count
    if (platelet < 150) diseases.push("Low Platelets: Thrombocytopenia caused by Autoimmune Diseases or Infections");
    else if (platelet > 450) diseases.push("High Platelets: Thrombocytosis caused by Bone Marrow Disorders or Inflammation");

    // Combination and Corner Cases
    if (rbc < 4.7 && hemoglobin < 13.5) diseases.push("Severe Anemia: Low RBC and Hemoglobin suggest Chronic Blood Loss or Nutritional Deficiency");
    if (wbc > 11000 && neutrophils > 70) diseases.push("Bacterial Infection: High WBC and Neutrophils indicate Infection or Stress");
    if (wbc > 11000 && eosinophils > 5) diseases.push("Allergic Reaction: High WBC and Eosinophils indicate Allergies or Parasitic Infection");
    if (rbc > 6.1 && hemoglobin > 17.5 && platelet > 450) diseases.push("Polycythemia Vera: Elevated RBC, Hemoglobin, and Platelets suggest a Bone Marrow Disorder");

    // Save results to sessionStorage
    const result = {
        rbc,
        hemoglobin,
        wbc,
        neutrophils,
        eosinophils,
        basophils,
        platelet,
        diseases
    };
    sessionStorage.setItem("result", JSON.stringify(result));
    window.location.href = "result.html";
}

// Display Results on Result Page
window.onload = function() {
    const result = JSON.parse(sessionStorage.getItem("result"));
    if (result) {
        const reportDiv = document.getElementById("report");
        reportDiv.innerHTML = `
            <p><strong>RBC:</strong> ${result.rbc}</p>
            <p><strong>Hemoglobin:</strong> ${result.hemoglobin}</p>
            <p><strong>WBC:</strong> ${result.wbc}</p>
            <p><strong>Neutrophils:</strong> ${result.neutrophils}%</p>
            <p><strong>Eosinophils:</strong> ${result.eosinophils}%</p>
            <p><strong>Basophils:</strong> ${result.basophils}%</p>
            <p><strong>Platelet:</strong> ${result.platelet}</p>
            <h3>Possible Diseases:</h3>
            <ul>
                ${result.diseases.map(disease => `<li>${disease}</li>`).join("")}
            </ul>
        `;
    }
};
