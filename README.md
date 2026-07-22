# Old Dominion Dispatch — Virginia News Site

Next.js (App Router) + TypeScript + Tailwind CSS. Nội dung bài viết lưu dạng Markdown
(gray-matter + remark), không dùng database/CMS.

## Chạy thử ở local

```bash
# 1. Cài dependencies
npm install

# 2. Chạy dev server
npm run dev
```

Mở http://localhost:3000 trong trình duyệt.

Trước khi deploy/build production:

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
app/
  page.tsx                  # Trang chủ (hero + 5 khối chuyên mục theo đúng thứ tự)
  category/[slug]/page.tsx  # Trang danh sách chuyên mục (có phân trang)
  article/[slug]/page.tsx   # Trang chi tiết bài viết
  layout.tsx, globals.css
components/                 # Header, Footer, ArticleCard, CategorySection, Seal, ...
content/articles/*.md       # 74 bài viết mẫu (frontmatter + nội dung Markdown)
lib/content.ts              # Đọc & parse Markdown bằng gray-matter + remark
lib/categories.ts           # Danh sách 5 chuyên mục + thứ tự hiển thị trang chủ
types/article.ts            # Kiểu dữ liệu Article/Category
```

## Lưu ý quan trọng

- **Không có kết nối mạng khi tạo project này** nên toàn bộ code được viết tay, package.json
  liệt kê phiên bản cụ thể nhưng **chưa được `npm install` / `npm run build` để xác nhận**.
  Đã chạy `tsc --noEmit` (bỏ qua lỗi thiếu module do chưa cài package) để kiểm tra cú pháp —
  không phát hiện lỗi cú pháp thực sự, nhưng bạn vẫn nên chạy `npm run build` ở máy mình
  trước khi deploy để chắc chắn 100%.
- Ảnh cover dùng **URL trực tiếp từ Unsplash CDN** (`images.unsplash.com`, đã khai báo trong
  `next.config.mjs` → `images.remotePatterns`). Vì môi trường tạo project không truy cập được
  mạng để xác minh từng ảnh, danh sách ID ảnh được chọn từ các ảnh Unsplash phổ biến theo trí
  nhớ — **rất nên kiểm tra lại từng ảnh** (mở thử URL, xem đúng chủ đề & còn tồn tại không) và
  xác nhận lại tên tác giả trước khi dùng cho mục đích công khai/thương mại, để đảm bảo credit
  chính xác.
- 74 bài viết mẫu (15/15/15/15/14 theo 5 chuyên mục), 15 bài ngày 2025, 59 bài ngày 2026.
