const form = document.getElementById('generateForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input[name="url"]');

    if (input.value) {
        fetch('http://localhost:9000/api/v1/url/', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ url: input.value })
        })
            .then(response => response.json())
            .then((response) => {
                document.getElementById('result').innerText = response.shortUrl;
            })
            .catch(() => {});
    }

    return false;
});