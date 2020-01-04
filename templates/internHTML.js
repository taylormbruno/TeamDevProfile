function internHTML(name, id, email, school) {
    return `<div class="card bg-light mb-3" style="max-width:18rem">
    <div class="card-header" style="background-color:#0077F7; color:white;">
        <h3>${name}</h3>
        <i class="fas fa-user-graduate"></i> Intern
    </div>
    <div class="card-body">
        <div class="border border-secondary" style="border-radius: 3%; padding: 5px;">
            <table>
                <tbody>
                    <tr>
                        <td>
                            ID: ${id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email: <a href="${email}">${email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            School: ${school}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
}

module.exports = internHTML;