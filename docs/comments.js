document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname !== "/index.html") {
        let commentSection = document.createElement("div");
        commentSection.innerHTML = `
            <hr />
            <p>If you want to give feedback or share your experience with this tutorial, please comment below. (Requires GitHub account)</p>
            <script src="https://utteranc.es/client.js"
                    repo="deltares-desirmed/nbs-tutorials"
                    issue-term="title"
                    label="comment"
                    theme="github-light"
                    crossorigin="anonymous"
                    async>
            </script>
        `;
        document.body.appendChild(commentSection);
    }
});
