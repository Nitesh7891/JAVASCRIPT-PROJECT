function UrlShortener(event) {

    event.preventDefault();

    const url =
        longUrl.value.trim();

    try {

        new URL(url);

        const urls =
            JSON.parse(
                localStorage.getItem('urls')
            ) || {};

        // Check if URL already exists
        const existingCode =
            Object.keys(urls).find(
                key => urls[key] === url
            );

        let shortCode;

        if (existingCode) {

            // Reuse existing code
            shortCode =
                existingCode;

        } else {

            // Generate new code
            shortCode =
                getNewCode();

            urls[shortCode] = url;

            localStorage.setItem(
                'urls',
                JSON.stringify(urls)
            );
        }

        const shortUrl =
            window.location.origin +
            '/' +
            shortCode;

        document.getElementById(
            'result'
        ).innerHTML += `
            <p>
                <a href="${shortUrl}"
                   target="_blank">
                   ${shortUrl}
                </a>
            </p>
        `;

        longUrl.value = '';

    } catch (error) {

        alert(
            'Please enter a valid URL'
        );
    }
}