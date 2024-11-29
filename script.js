
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

        // Helper function to add disease with description
        function addDisease(name, description) {
            diseases.push({ name, description });
        }
    


             /*    ---->    Diseases on the basis of RBC,MCV,Hemoglobin   <----    */


    // for --> Iron Deficiency Anemia:
    if (rbc < 4.7 && hemoglobin < 13.8 && mcv < 80 )         
        addDisease("Iron Deficiency Anemia", " - A lack of iron in the body reduces red blood cell production, leading to fatigue and weakness.");
     
    //for --> Vitamin B12 or Folate Deficiency
     if(hemoglobin < 13.8 && mcv > 100)
        addDisease("Vitamin B12 or Folate Deficiency", "A deficiency caused by inadequate absorption or intake of B12 or folate, causing large, immature red blood cells.");

    //for --> Chronic Disease Anemia
    if (hemoglobin < 13.8 && rbc < 4.7 && mcv < 100) 
        addDisease("Chronic Disease Anemia", "Anemia associated with long-term conditions such as infections, inflammation, or cancer.");


    //for --> Hemolytic anemia
    if (hemoglobin < 13.8 && rbc < 4.7 )
        addDisease("Hemolytic Anemia", "A condition where red blood cells are destroyed faster than they can be produced.");



    /*                     ---->  Infections (WBC and WBC diffrential)   <-----       */

 
    // for --> Bacterial Infection
    if (wbc > 11000 && neutrophils > 70 ) 
        addDisease("Bacterial Infection", "An infection caused by bacteria, characterized by fever and elevated white blood cells.");

    //for --> Viral Infection
    if (wbc > 11000  && lymphocytes > 40) 
        addDisease("Viral Infection", "A condition caused by viruses, often leading to high lymphocyte levels.");


    // for --> Parasitic Infection
    if ( wbc > 11000 && eosinophils > 4) 
        addDisease("Parasitic Infection", "An infection caused by parasites, often seen in tropical or subtropical regions.");


    //for --> Chronic Infections
    if ( wbc > 11000 && monocytes > 8) 
        addDisease("Chronic Infection (e.g., Tuberculosis)", "A persistent infection characterized by elevated monocytes and white blood cells, often seen in conditions like tuberculosis.");



    /*             ---> Bone Marrow and Blood Disorders (RBC, WBC, Platelet Abnormalities)  <----            */


    // for --> Leukemia
    if ( wbc > 11000 && platelet < 150 && rbc < 4.7 ) 
        addDisease("Chronic Infection (e.g., Tuberculosis)", "A persistent infection characterized by elevated monocytes and white blood cells, often seen in conditions like tuberculosis.");

    // for --> Aplastic Anemia
    if ( wbc < 4000 && platelet < 150 && rbc < 4.7) 
        addDisease("Aplastic Anemia", "A rare condition where the bone marrow fails to produce enough blood cells, causing fatigue, infections, and bleeding.");


    // for --> Polycythemia Vera
    if ( rbc > 6.1 && hemoglobin > 17.2 && platelet > 450  ) 
        addDisease("Polycythemia Vera", "A rare blood disorder causing overproduction of red blood cells, leading to thickened blood and increased clotting risk.");


    // for ---> Myelodysplastic Syndrome
    if ( rbc < 4.7 && platelet < 150 && wbc <= 11000) 
        addDisease("Myelodysplastic Syndrome", "A group of disorders caused by poorly formed or dysfunctional blood cells, often linked to bone marrow issues.");


    /*                  ---->   Clotting Disorders (Platelet Count and Function)     <----                      */



    // for --> Immune Thrombocytopenic Purpura (ITP)
    if (platelet < 150 && rbc >= 4.7 && rbc <= 6.1) 
        addDisease("Immune Thrombocytopenic Purpura (ITP)", "An autoimmune condition where the immune system destroys platelets, leading to easy bruising and bleeding.");
  
    // for --> Disseminated Intravascular Coagulation (DIC)
    if (platelet < 150 && rbc < 4.7 && wbc > 11000) 
        addDisease("Disseminated Intravascular Coagulation (DIC)", "A serious disorder where clotting factors are overactivated, causing both excessive clotting and bleeding.");

    // for --> Myeloproliferative Disorders
    if ( platelet > 450 && rbc >= 4.7 ) 
        addDisease("Myeloproliferative Disorders", "A group of blood cancers that cause the bone marrow to produce too many blood cells.");

    // for --> Chronic Inflammatory Conditions
    if ( platelet > 450 && wbc >= 4000) 
        addDisease("Chronic Inflammatory Conditions", "Prolonged inflammation that may lead to elevated platelet and white blood cell counts, often linked to autoimmune diseases.");

    // for --> chronic kidney disease
    if ( rbc < 4.7 && hemoglobin < 13.8) 
        addDisease("Chronic Kidney Disease", "A condition where the kidneys fail to function properly, often leading to anemia due to reduced erythropoietin production.");

    // for --> liver disease
    if ( platelet < 150) 
        addDisease("Liver Disease (Cirrhosis)", "Scarring of the liver that impairs its ability to produce clotting factors, causing low platelet levels.");

    //for --> Alcoholism
    if ( platelet < 150 && rbc < 4.7 && mcv > 100) 
        addDisease("Alcoholism", "Prolonged alcohol use can suppress bone marrow function, leading to low platelets, anemia, and enlarged red blood cells.");



    /*                         --->     Autoimmune Diseases   <----                    */

    
    // for --> Systemic Lupus Erythematosus (SLE):
    if ( platelet < 150 && wbc < 4000 && lymphocytes < 20) 
        addDisease("Systemic Lupus Erythematosus (SLE)", "An autoimmune disease that can affect blood cells, causing low white blood cell and platelet counts.");


    /*            ---> Allergies <----       */

    // for --> Allergic disorder
    if ( eosinophils > 4 && basophils >1) 
        addDisease("Allergic Disorder - Asthma or Atopy", "Allergic reactions causing elevated eosinophils and basophils, often seen in asthma or other atopic conditions.");




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
window.onload = function () {
    const result = JSON.parse(sessionStorage.getItem("result"));
    if (result) {
        const reportDiv = document.getElementById("report");

        // Add basic parameters
        let reportContent = `
            <p><strong>RBC:</strong> ${result.rbc}</p>
            <p><strong>Hemoglobin:</strong> ${result.hemoglobin}</p>
            <p><strong>WBC:</strong> ${result.wbc}</p>
            <p><strong>Neutrophils:</strong> ${result.neutrophils}%</p>
            <p><strong>Lymphocytes:</strong> ${result.lymphocytes}%</p>
            <p><strong>Eosinophils:</strong> ${result.eosinophils}%</p>
            <p><strong>Basophils:</strong> ${result.basophils}%</p>
            <p><strong>Monocytes:</strong> ${result.monocytes}%</p>
            <p><strong>Platelet:</strong> ${result.platelet}</p>
            <p><strong>MCV:</strong> ${result.mcv}</p>
        `;

        // Add diseases with descriptions
        if (result.diseases.length > 0) {
            reportContent += `<h3>Possible Diseases:</h3>`;
            result.diseases.forEach(disease => {
                reportContent += `
                    <div class="disease-detail">
                        <h4>${disease.name}</h4>
                        <p>${disease.description}</p>
                    </div>
                `;
            });
        } else {
            reportContent += `<p><strong>No diseases detected.</strong></p>`;
        }

        // Update the report div
        reportDiv.innerHTML = reportContent;
    }
};


