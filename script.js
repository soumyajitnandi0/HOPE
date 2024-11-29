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
    const lymphocytes = parseFloat(document.getElementById("lymphocytes").value);
    const eosinophils = parseFloat(document.getElementById("eosinophils").value);
    const basophils = parseFloat(document.getElementById("basophils").value);
    const monocytes = parseFloat(document.getElementById("monocytes").value);
    const platelet = parseFloat(document.getElementById("platelet").value);
    const mcv = parseFloat(document.getElementById("mcv").value);

    // Disease Analysis
    let diseases = [];


             /*    ---->    Diseases on the basis of RBC,MCV,Hemoglobin   <----    */


    // for --> Iron Deficiency Anemia:
    if (rbc < 4.7 && hemoglobin < 13.8 && mcv < 80 ) diseases.push(" Iron Deficiency Anemia");
     
    //for --> Vitamin B12 or Folate Deficiency
     if(hemoglobin < 13.8 && mcv > 100) diseases.push("Vitamin B12 or Folate Deficiency");

    //for --> Chronic Disease Anemia
    if (hemoglobin < 13.8 && rbc < 4.7 && mcv < 100) diseases.push("Chronic Disease Anemia");

    //for --> Hemolytic anemia
    if (hemoglobin < 13.8 && rbc < 4.7 ) diseases.push("Hemolytic anemia");


    /*                     ---->  Infections (WBC and WBC diffrential)   <-----     */

 
    // for --> Bacterial Infection
    if (wbc > 11000 && neutrophils > 70 ) diseases.push(" Bacterial infection ");

    //for --> Viral Infection
    if (wbc > 11000  && lymphocytes > 40) diseases.push(" Viral Infection");

    // for --> Parasitic Infection
    if ( wbc > 11000 && eosinophils > 4) diseases.push("Parasitic Infection");

    //for --> Chronic Infections
    if ( wbc > 11000 && monocytes > 8) diseases.push(" Chronic Infection  ( eg :Tuberclosis)");



    /*             ---> Bone Marrow and Blood Disorders (RBC, WBC, Platelet Abnormalities)  <----            */


    // for --> Leukemia
    if ( wbc > 11000 && platelet < 150 && rbc < 4.7 ) diseases.push("Leukemia");

    // for --> Aplastic Anemia
    if ( wbc < 4000 && platelet < 150 && rbc < 4.7) diseases.push(" Aplastic Anemia -- Bone marrow Failure");

    // for --> Polycythemia Vera
    if ( rbc > 6.1 && hemoglobin > 17.2 && platelet > 450  ) diseases.push("Polycythemia Vera");

    // for ---> Myelodysplastic Syndrome
    if ( rbc < 4.7 && platelet < 150 && wbc <= 11000) diseases.push("Myelodysplastic Syndrome");



    /*                  ---->   Clotting Disorders (Platelet Count and Function)     <----                      */



    // for --> Immune Thrombocytopenic Purpura (ITP)
    if (platelet < 150 && rbc >= 4.7 && rbc <= 6.1) diseases.push("Immune Thrombocytopenic Purpura (ITP)");
  
    // for --> Disseminated Intravascular Coagulation (DIC)
    if (platelet < 150 && rbc < 4.7 && wbc > 11000) diseases.push("Disseminated Intravascular Coagulation (DIC)");

    // for --> Myeloproliferative Disorders
    if ( platelet > 450 && rbc >= 4.7 ) diseases.push("Myeloproliferative Disorders");

    // for --> Chronic Inflammatory Conditions
    if ( platelet > 450 && wbc >= 4000) diseases.push("Chronic Inflammatory Conditions");

    // for --> chronic kidney disease
    if ( rbc < 4.7 && hemoglobin < 13.8) diseases.push("Chronic kidney disease");

    // for --> liver disease
    if ( platelet < 150) diseases.push("liver disease(Cirrhosis)");

    //for --> Alcoholism
    if ( platelet < 150 && rbc < 4.7 && mcv > 100) diseases.push(" Alcoholism (bone marrow Suppresion)");



    /*                         --->     Autoimmune Diseases   <----                    */

    
    // for --> Systemic Lupus Erythematosus (SLE):
    if ( platelet < 150 && wbc < 4000 && lymphocytes < 20) diseases.push(" Systemic Lupus Erythematosus (SLE):");


    /*            ---> Allergies <----       */

    // for --> Allergic disorder
    if ( eosinophils > 4 && basophils >1) diseases.push(" Allergic disorder - Asthma atopy");




    // Save results to sessionStorage
    const result = {
        rbc,
        hemoglobin,
        wbc,
        neutrophils,
        lymphocytes,
        eosinophils,
        basophils,
        monocytes,
        platelet,
        mcv,
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
              <p><strong>Neutrophils:</strong> ${result.lymphocytes}%</p>
            <p><strong>Eosinophils:</strong> ${result.eosinophils}%</p>
            <p><strong>Basophils:</strong> ${result.basophils}%</p>
            <p><strong>Monocytes:</strong> ${result.monocytes}%</p>
            <p><strong>Platelet:</strong> ${result.platelet}</p>
            <p><strong>MCV:</strong> ${result.mcv}%</p>
            <h3>Possible Diseases:</h3>
            <ul>
                ${result.diseases.map(disease => `<li>${disease}</li>`).join("")}
            </ul>
        `;
    }
};
