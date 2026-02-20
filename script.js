const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const clearBtn = document.getElementById('clearBtn');

//  count words and characters
function updateCounts() {
    const text = textInput.value.trim();

    // Character count
    charCount.textContent = text.length;

    // Word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
}

textInput.addEventListener('input', updateCounts);

// Clear button
clearBtn.addEventListener('click', () => {
    textInput.value = '';
    updateCounts();
});