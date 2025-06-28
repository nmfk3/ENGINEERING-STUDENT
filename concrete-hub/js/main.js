// تحديث سنة الفوتر تلقائيًا
document.getElementById('year').textContent = new Date().getFullYear();

// تنشيط القوائم
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(targetId).style.display = 'block';
    });
});
