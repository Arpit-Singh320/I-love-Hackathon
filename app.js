/* app.js */
const connectWalletButton = document.getElementById('connectWallet');
const walletStatus = document.getElementById('walletStatus');
const reportForm = document.getElementById('reportForm');
const itemsContainer = document.getElementById('items');

let walletAddress = null;

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            walletAddress = accounts[0];
            walletStatus.textContent = `Connected: ${walletAddress}`;
        } catch (err) {
            console.error(err);
            alert('Could not connect wallet');
        }
    } else {
        alert('MetaMask not detected');
    }
}

connectWalletButton.addEventListener('click', connectWallet);

reportForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemImage = document.getElementById('itemImage').files[0];
    const itemLocation = document.getElementById('itemLocation').value;

    if (!walletAddress) {
        alert('Please connect your wallet first!');
        return;
    }

    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <h3>${itemName}</h3>
        <p><strong>Description:</strong> ${itemDescription}</p>
        <p><strong>Location:</strong> ${itemLocation}</p>
    `;

    const reader = new FileReader();
    reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        item.appendChild(img);
        itemsContainer.appendChild(item);
    };

    reader.readAsDataURL(itemImage);
    reportForm.reset();
});
