# Фронтенд — это статические файлы (HTML, JS, CSS)
# Для их раздачи используем nginx — лёгкий и быстрый веб-сервер
FROM nginx:alpine
 
# Копируем наши статические файлы в папку, откуда nginx их раздаёт
# /usr/share/nginx/html — стандартная папка nginx для статики
COPY . /usr/share/nginx/html
 
# Nginx слушает порт 80 по умолчанию
EXPOSE 80
 
# nginx:alpine уже содержит CMD ["nginx", "-g", "daemon off;"]
# поэтому свою CMD писать не нужно
