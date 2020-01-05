function genCard(role, icon, name, id, email, vType, varies) {
    return `<div class="card bg-light mb-3">
        <div class="card-header">
            <h3>${name}</h3>
            ${icon} ${role}
        </div>
        <div class="card-body">
            <div class="border border-secondary cardBody">
                <table>
                    <tbody>
                        <tr>
                            <td>ID: ${id}</td>
                        </tr>
                        <tr>
                            <td>Email: <a href="${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td>${vType}: ${varies}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `
}

module.exports = genCard;