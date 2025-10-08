# 📚 Học Tứ Trụ - Hệ Thống Flashcard Học Tập

> Hệ thống flashcard tương tác để học Âm Dương, Ngũ Hành, Thiên Can, Địa Chi một cách hiệu quả và dễ nhớ.

[![Deploy Status](https://img.shields.io/badge/deploy-Cloudflare%20Pages-orange)](https://tutru.checkvarip.pro)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌟 Tính Năng

### ✅ Đã Hoàn Thành

#### 🎴 Flashcards Ngũ Hành
- 5 thẻ flashcard với hiệu ứng flip 3D
- Icons đại diện cho từng hành (🔱 Kim, 🌳 Mộc, 💧 Thủy, 🔥 Hỏa, ⛰️ Thổ)
- Thông tin đầy đủ: Tính chất, Hình ảnh, Màu sắc, Phương hướng, Nghề nghiệp, Cơ thể
- Trạng thái theo mùa (Vượng, Tưởng, Hưu, Tù, Tử)
- Quan hệ Sinh - Khắc cơ bản

#### 🌸 Tab Theo Mùa
- Hiển thị đặc điểm của từng hành qua 4 mùa
- Icons mùa (🌸 Xuân, ☀️ Hạ, 🍂 Thu, ❄️ Đông)
- Animations mượt mà với Framer Motion
- Grid layout 2x2 với màu sắc đặc trưng

#### ⚡ Tab Quan Hệ Ngũ Hành
- Bảng tương tác 5x4 (5 hành × 4 loại quan hệ)
- 4 loại quan hệ quá độ:
  - 🌊 Sinh quá độ
  - ⚖️ Tiết quá độ
  - ⚔️ Khắc quá độ
  - 💨 Hao quá độ
- Click vào ô để xem chi tiết "Quá độ" và "Giải cứu"
- Legend giải thích đầy đủ

### 🎨 Giao Diện

- Gradient background với decorative patterns
- Glass morphism effects
- Responsive design (Mobile, Tablet, Desktop)
- Custom scrollbar
- Smooth animations và transitions
- Color-coded theo nguyên tắc Ngũ Hành

## 🚀 Demo

**Live Demo**: [https://tutru.checkvarip.pro](https://tutru.checkvarip.pro)

Alternative URL: [https://hoc-tu-tru.pages.dev](https://hoc-tu-tru.pages.dev)

## 📖 Tài Liệu

Xem file [LY_THUYET_NGU_HANH.md](./LY_THUYET_NGU_HANH.md) để đọc toàn bộ lý thuyết Ngũ Hành.

**Nội dung bao gồm**:
- 5 Ngũ Hành chi tiết
- Trạng thái theo mùa (Vượng, Tưởng, Hưu, Tù, Tử)
- Quan hệ Tương Sinh - Tương Khắc
- Quan hệ nâng cao (Phản Sinh, Phản Khắc, Tương Thừa)
- Bảng quan hệ quá độ và giải cứu

## 💻 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **Deployment**: Cloudflare Pages
- **Version Control**: Git + GitHub

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone repository
git clone https://github.com/vietsonvnn/hoc-tu-tru.git
cd hoc-tu-tru

# Install dependencies
npm install

# Run development server
npm run dev
```

Server sẽ chạy tại: http://localhost:5173

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy

Project tự động deploy lên Cloudflare Pages khi push lên branch `main`.

**Build Settings**:
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## 📂 Cấu Trúc Thư Mục

```
src/
├── components/          # React components
│   ├── NguHanhCard.tsx      # Flashcard component
│   ├── BonMuaGrid.tsx       # 4 seasons grid
│   └── QuanHeTable.tsx      # Relationship table
├── data/               # Data files
│   ├── nguHanh.ts           # Ngũ Hành data
│   └── quanHeNguHanh.ts     # Relationships data
├── pages/              # Page components
│   └── Home.tsx             # Main page
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
│   ├── colors.ts            # Color mappings
│   ├── localStorage.ts      # Progress tracking
│   └── nguHanhRelations.ts  # Relationship helpers
├── App.tsx             # App root
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Roadmap

### 🔜 Sắp Tới

- [ ] Thiên Can (10 Can)
- [ ] Địa Chi (12 Chi)
- [ ] Quan hệ Can - Chi
- [ ] Spaced Repetition System
- [ ] Quiz mode
- [ ] Export/Import progress
- [ ] Dark mode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Học Tứ Trụ Team**

- Website: [tutru.checkvarip.pro](https://tutru.checkvarip.pro)
- Repository: [github.com/vietsonvnn/hoc-tu-tru](https://github.com/vietsonvnn/hoc-tu-tru)

---

**⭐ Nếu project hữu ích, hãy cho một star nhé!**

🤖 Built with [Claude Code](https://claude.com/claude-code)
