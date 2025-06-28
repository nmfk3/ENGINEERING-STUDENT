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
// حاسبة الخرسانة
document.getElementById('calculate-btn').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        document.getElementById('result').innerHTML = 
            '<p class="error">الرجاء إدخال قيم صحيحة</p>';
        return;
    }
    
    const volume = length * width * height;
    const cementBags = Math.ceil(volume * 7.5); // 7.5 أكياس لكل متر مكعب
    
    document.getElementById('result').innerHTML = `
        <p>حجم الخرسانة: <strong>${volume.toFixed(2)} م³</strong></p>
        <p>عدد أكياس الإسمنت (تقريبي): <strong>${cementBags} كيس</strong></p>
    `;
});
