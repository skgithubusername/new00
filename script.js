function verifyCertificate() {
    var certificateID = document.getElementById("certificateID").value;
    var customID = document.getElementById("customID").value;
    var validCertificates = {"ABC123": "User123", "XYZ789": "User456"}; // Map valid certificate IDs to custom IDs

    if (validCertificates.hasOwnProperty(certificateID) && validCertificates[certificateID] === customID) {
        document.getElementById("result").innerHTML = "Certificate is valid!";
    } else {
        document.getElementById("result").innerHTML = "Invalid certificate or custom ID. Please try again.";
    }
}