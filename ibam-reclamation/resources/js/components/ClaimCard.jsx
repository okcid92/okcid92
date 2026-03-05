// Existing content of ClaimCard.jsx

// Update the validation logic for ENSEIGNANT role
if (userRole === 'ENSEIGNANT') {
    if (!correctedGrade) {
        setValidationError('Corrected grade is required for approval.');
    }
    if (!comment) {
        setValidationError('Comment is required for rejection.');
    }
}

// Display an action panel for validation errors
if (validationError) {
    return <div className="error-message">{validationError}</div>;
}