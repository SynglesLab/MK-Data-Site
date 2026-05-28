// Function to update bundle list based on network selection
function updateBundles() {
    const network = document.getElementById('network').value;
    const bundleSelect = document.getElementById('bundle');
    
    // Clear existing options
    bundleSelect.innerHTML = '';

    let options = [];

    if (network === 'MTN') {
        options = ["1GB", "2GB", "3GB", "4GB", "5GB", "6GB", "8GB", "10GB", "15GB", "20GB", "25GB", "30GB", "40GB"];
    } else if (network === 'Telecel') {
        options = ["10GB", "15GB", "20GB", "25GB", "30GB", "40GB"];
    } else if (network === 'AirtelTigo') {
        options = ["1GB", "2GB", "3GB", "4GB", "5GB", "6GB", "8GB", "10GB", "15GB", "20GB", "25GB", "30GB"];
    }

    // Populate the dropdown
    options.forEach(bundle => {
        let opt = document.createElement('option');
        opt.value = bundle;
        opt.innerHTML = bundle + " Data";
        bundleSelect.appendChild(opt);
    });
}

// Initialize bundles on page load
window.onload = updateBundles;

// Form Submission Logic (Telegram Integration)
document.getElementById("dataForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let network = document.getElementById("network").value;
    let bundle = document.getElementById("bundle").value;
    let phone = document.getElementById("phone").value;
    let reference = document.getElementById("reference").value;

    let message = 
        "🔥 NEW ORDER 🔥\n\n" +
        "Network: " + network + "\n" +
        "Bundle: " + bundle + "\n" +
        "Phone: " + phone + "\n" +
        "Reference: " + reference;

    fetch("https://api.telegram.org/bot8556688543:AAGYOwyjJGED3PK9ab0quItrbS62opHX7qc/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "7428399196",
            text: message
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.getElementById("status").innerHTML = "✅ Thank you! Your order has been received and will be process soon. Choose CnKneTs Next Time! @Morikel";
        alert("Order Sent Successfully!");
        document.getElementById("dataForm").reset();
        // Reset bundles to default after form reset
        updateBundles(); 
    })
    .catch(function(error){
        document.getElementById("status").innerHTML = "❌ Error sending order.";
        console.log(error);
    });
});
