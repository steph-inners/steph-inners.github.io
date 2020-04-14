// Define processing URL and form element

const url = 'process.php';
const form = document.querySelector('form');

// Listen for form submit

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Gather files and begin formdata

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();
})




