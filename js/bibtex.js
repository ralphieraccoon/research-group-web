function bibtex(code) {
    var opened = window.open("");
    opened.document.write('<html><title>BibTeX</title><body><pre style="word-wrap: break-word; white-space: pre-wrap;">' + code + "</pre></body></html>");
}