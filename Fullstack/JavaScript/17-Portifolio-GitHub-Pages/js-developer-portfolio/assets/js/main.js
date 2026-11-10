function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

// Professional Summary
function updateProfessionalSummary(profileData) {
    const summary = document.getElementById('profile.professionalSummary')

    if (summary) {
        summary.innerText = profileData.professionalSummary
    }
}

// Formação Acadêmica
function updateEducation(profileData) {
    const education = document.getElementById('profile.education')

    if (!education) return

    education.innerHTML = profileData.education.map(course => {
        return `
            <li>
                <h3>${course.name}</h3>
                <p>${course.institution}</p>
                <p>${course.period}</p>
                <p>${course.status}</p>
            </li>
        `
    }).join('')
}

// Certificações e Cursos
function updateCertifications(profileData) {
    const certifications = document.getElementById('profile.certifications')

    if (!certifications) return

    certifications.innerHTML = profileData.certifications.map(certification => {
        return `
            <li>
                <h3>${certification.name}</h3>
                <p>${certification.institution}</p>
                <p>${certification.category}</p>
            </li>
        `
    }).join('')
}

// Soft Skills
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    if (!softSkills) return

    softSkills.innerHTML = profileData.skills.softSkills
        .map(skill => `<li>${skill}</li>`)
        .join('')
}

// Hard Skills
function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(skill => `
            <li>
                <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
            </li>
        `)
        .join('')
}

// Idiomas
function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages
        .map(language => `<li>${language}</li>`)
        .join('')
}

// Portfólio
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>
                    ${project.name}
                </h3>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                    ${project.url}
                </a>
            </li>
        `
    }).join('')
}

// Experiência Profissional
function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

// Carregamento dos dados
(async () => {
    const profileData = await fetchProfileData()

    updateProfileInfo(profileData)
    updateProfessionalSummary(profileData)
    updateEducation(profileData)
    updateCertifications(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()