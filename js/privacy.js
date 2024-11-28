const termsBtn = document.getElementById('terms-btn');
const privacyBtn = document.getElementById('privacy-btn');
const termsContent = document.getElementById('terms-content');
const privacyContent = document.getElementById('privacy-content');

termsBtn.addEventListener('click', () => {
  termsBtn.classList.add('active');
  privacyBtn.classList.remove('active');
  termsContent.style.display = 'block';
  privacyContent.style.display = 'none';
});

privacyBtn.addEventListener('click', () => {
  privacyBtn.classList.add('active');
  termsBtn.classList.remove('active');
  privacyContent.style.display = 'block';
  termsContent.style.display = 'none';
});

