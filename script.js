document.addEventListener("DOMContentLoaded", function () {
  // Смена темы
  const themeButtons = document.querySelectorAll("#toggle-theme");
  themeButtons.forEach(button => {
    button.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
    });
  });

  // Обновление времени во Вьетнаме (часовой пояс Asia/Ho_Chi_Minh)
  function updateVietnamTime() {
    const timeElement = document.getElementById("current-time");
    if (timeElement) {
      const options = { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const now = new Date();
      timeElement.textContent = "Текущее время во Вьетнаме: " + now.toLocaleTimeString('ru-RU', options);
    }
  }
  setInterval(updateVietnamTime, 1000);
  updateVietnamTime();

  // Кнопка "Наверх"
  const scrollTopButtons = document.querySelectorAll(".scroll-top");
  scrollTopButtons.forEach(button => {
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
