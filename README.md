# Câu hỏi: Nếu API trả về chậm, bạn sẽ debug và tối ưu cách nào để cải thiện tốc độ load?

- Đầu tiên cần kiểm tra thời gian phản hồi API bằng DevTools trên trình duyệt để xem API nào đang chậm, kiểm tra xem có phải vấn đề nằm ở phía BE hay không, sau đó mới tiến hành tối ưu phía FrontEnd.
- Một số cách xử lý như:

* Hiển thị trang loading để cải thiện trải nghiệm người dùng.
* Gọi nhiều API song song thay vì tuần tự.
* Cache dữ liệu để hiển thị nếu dữ liệu ít thay đổi.
* Dùng useFetch() hoặc useAsyncData() với lazy, server: false để tránh gọi không cần thiết.
  - Khi set lazy: true thì API chỉ được gọi khi component được hiển thị giúp tăng tốc độ load ban đầu.
  - Khi set server: false thì API sẽ không được gọi ở phía server, giúp giảm tải cho server và tăng tốc độ. Nhưng chỉ dùng khi dữ liệu không cần SEO.

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Cách cài đặt và khởi chạy project Nuxt 3

## 1. Clone project

git clone https://github.com/MVNgoc/test-nuxt-development.git
cd test-nuxt-development

## 2. Cài đặt dependencies

npm install

## 3. Chạy project ở chế độ phát triển

npm run dev

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Link web đã được deploy:

[yenmarket](https://yenmarket.netlify.app/)
