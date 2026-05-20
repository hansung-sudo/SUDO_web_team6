# SUDO 메인 페이지 (정적 웹)

간단히 확인하려면 `mainpage/index.html`을 브라우저에서 열거나 아래 정적 서버를 사용하세요.

```bash
cd mainpage
python -m http.server 8000
```

웹페이지 특징
- 첫화면으로 `SUDO` 히어로 섹션과 지원 버튼
- 스크롤 시 히어로가 서서히 사라지며 메인 콘텐츠 등장
- 3개의 정보 섹션 및 프로젝트 표시

파일 구성
- `index.html` — 메인 페이지 구조
- `src/styles.css` — 히어로 스타일, 애니메이션, 반응형 레이아웃
- `src/app.js` — 히어로 페이드 및 섹션 리빌 타이밍 제어
- `assets/*.svg` — 플레이스홀더 이미지
