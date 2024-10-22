function readMore(id) {
    const content = document.getElementById(`extra-content-${id}`);
    const isVisible = content.style.display === 'block';

    // Toggle the content display
    if (isVisible) {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
