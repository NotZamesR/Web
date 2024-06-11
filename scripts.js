document.getElementById('admin-login-btn').addEventListener('click', adminLogin);

function showChat() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('chat').classList.remove('hidden');
}

function joinChat() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('chat-box').classList.remove('hidden');
        document.getElementById('username').disabled = true;
        document.getElementById('username').style.display = 'none';
    } else {
        alert('Please enter a name to join the chat.');
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    const messages = document.getElementById('messages');
    const username = document.getElementById('username').value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${username}: ${message}`;
        messages.appendChild(messageElement);
        document.getElementById('message').value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}

function submitConfession() {
    const confession = document.getElementById('confession').value;
    if (confession) {
        alert('Confession submitted!');
        document.getElementById('confession').value = '';
    } else {
        alert('Please write something to confess.');
    }
}

function adminLogin() {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
        document.getElementById('admin-chat').classList.remove('hidden');
        document.getElementById('admin-login-btn').classList.add('hidden');
    } else {
        alert('Incorrect password.');
    }
}

function sendAdminMessage() {
    const adminMessage = document.getElementById('admin-message').value;
    const adminMessages = document.getElementById('admin-messages');
    if (adminMessage) {
        const adminMessageElement = document.createElement('div');
        adminMessageElement.textContent = `Admin: ${adminMessage}`;
        adminMessages.appendChild(adminMessageElement);
        document.getElementById('admin-message').value = '';
        adminMessages.scrollTop = adminMessages.scrollHeight;
    }
}
