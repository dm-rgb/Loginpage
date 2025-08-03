/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const thankYouContainer = document.getElementById('thankYouContainer');

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would add your authentication
    // logic here, like sending the credentials to a server.
    
    // For this demo, we'll just switch to the thank you page.
    if (loginContainer && thankYouContainer) {
        loginContainer.classList.add('hidden');
        thankYouContainer.classList.remove('hidden');
    }
});