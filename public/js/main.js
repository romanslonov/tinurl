import { HOSTNAME } from './constants';

const main = () => {
    const form = document.getElementById('generateForm');
    const input  = form.querySelector('input[name="url"]');
    const link =  document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (input.value) {
            fetch(`${HOSTNAME}/api/v1/url/`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ url: input.value })
            })
                .then(response => response.json())
                .then((response) => {
                    link.innerText = response.url.shortUrl;
                    link.href = response.url.shortUrl;
                })
                .catch(() => {});
        }

        return false;
    });

    input.addEventListener('input', (e) => {
        if (!e.target.value) {
            link.innerText = '';
            link.href = '#';
        }
    });
};

main();