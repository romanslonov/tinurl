const form = document.getElementById('generateForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = form.querySelector('input[name="url"]');

    if (value.url) {
        fetch('http://localhost:9000/api/v1/shorten', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ url: value.url })
        })
            .then(response => response.json())
            .then((response) => {
                document.getElementById('result').innerText = response.shortUrl;
            })
            .catch(() => {});
    }

    return false;
});