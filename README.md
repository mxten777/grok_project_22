# GROK MVP 포트폴리오 - 혁신적인 AI 기반 프로젝트 쇼케이스

## 📋 프로젝트 개요

이 프로젝트는 **GROK AI**에 의해 생성된 55+개의 혁신적인 MVP(Minimum Viable Product)를 선보이는 최첨단 포트폴리오 웹사이트입니다. Vite, React, Three.js를 활용한 3D 인터랙션과 AI 기반 추천 시스템을 갖춘 프리미엄 포트폴리오입니다.

### 🎯 주요 목표
- AI의 힘으로 탄생한 혁신적인 프로젝트들을 효과적으로 소개
- 사용자 친화적인 인터페이스로 뛰어난 사용자 경험 제공
- 모바일 및 데스크톱에서 완벽한 반응형 디자인 구현
- PWA(Progressive Web App)로 앱처럼 설치 및 사용 가능

## ✨ 주요 기능

### 🏠 히어로 섹션
- **동적 통계 표시**: 총 프로젝트 수 (55+), 카테고리 수, Featured 프로젝트 수, 총 조회수
- **3D 배경**: 마우스 인터랙션이 가능한 Three.js 기반 스타필드
- **반응형 디자인**: 모든 기기에서 최적화된 레이아웃

### 🔍 검색 및 필터링
- **AI 기반 검색**: 프로젝트 이름, 설명, 기술 스택으로 실시간 검색
- **카테고리 필터**: 8개 카테고리별 필터링 (기업/산업, 공공/행정, 복지/의료/돌봄 등)
- **다크 모드 토글**: 사용자 선호에 따른 테마 전환

### 🎨 프로젝트 갤러리
- **카드 기반 레이아웃**: 각 프로젝트의 썸네일, 제목, 카테고리, 한 줄 요약 표시
- **애니메이션 효과**: Framer Motion을 활용한 부드러운 전환
- **Featured 표시**: 특별 추천 프로젝트 하이라이트

### 📊 데이터 시각화
- **기술 스택 분포**: 도넛 차트로 기술 사용 빈도 표시
- **카테고리별 프로젝트**: 바 차트로 카테고리 분포 시각화
- **Chart.js 통합**: 반응형 차트 라이브러리 사용

### 🤖 AI 추천 시스템
- **GROK AI 추천**: Featured 프로젝트 기반 스마트 추천
- **동적 표시**: 클릭으로 추천 프로젝트 토글
- **개인화**: 향후 사용자 행동 기반 추천 가능

### 📱 상세 모달
- **포괄적 정보**: 문제점, 해결책, 기술 스택, 학습점, 이미지 갤러리
- **소셜 공유**: 네이티브 공유 API 및 Twitter 공유
- **외부 링크**: 라이브 프로젝트 방문 링크

### 🌐 PWA 기능
- **앱 설치**: 모바일 홈 화면에 설치 가능
- **오프라인 지원**: 캐시된 리소스로 오프라인 작동
- **빠른 로딩**: 서비스 워커를 통한 리소스 캐싱

### 🎯 추가 기능
- **SEO 최적화**: 메타 태그, 오픈 그래프, 구조화된 데이터
- **접근성**: ARIA 라벨, 키보드 네비게이션, 스크린 리더 지원
- **성능 최적화**: 이미지 지연 로딩, 코드 분할
- **소셜 공유**: 프로젝트별 공유 기능
- **분석 통합**: Google Analytics 4 준비

## 🛠️ 기술 스택

### 프론트엔드
- **React 18**: 컴포넌트 기반 UI 개발
- **Vite**: 초고속 빌드 도구 및 개발 서버
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion**: 고성능 애니메이션 라이브러리

### 3D 그래픽스
- **Three.js**: 3D 그래픽스 렌더링
- **@react-three/fiber**: React용 Three.js 렌더러
- **@react-three/drei**: Three.js 헬퍼 컴포넌트

### 데이터 시각화
- **Chart.js**: 반응형 차트 라이브러리
- **react-chartjs-2**: React용 Chart.js 래퍼

### PWA 및 최적화
- **vite-plugin-pwa**: PWA 플러그인
- **Workbox**: 서비스 워커 관리

### 아이콘 및 UI
- **Lucide React**: 현대적인 아이콘 라이브러리

### 개발 도구
- **ESLint**: 코드 품질 검사
- **PostCSS**: CSS 처리
- **Autoprefixer**: CSS 벤더 프리픽스 자동 추가

## 📁 프로젝트 구조

```
grok_project_22/
├── public/
│   ├── images/          # 프로젝트 썸네일 및 이미지
│   ├── logo/            # 로고 파일
│   └── vite.svg         # Vite 기본 아이콘
├── src/
│   ├── App.jsx          # 메인 애플리케이션 컴포넌트
│   ├── index.css        # 전역 스타일 (Tailwind CSS)
│   └── main.jsx         # 애플리케이션 진입점
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 의존성 및 스크립트
├── vite.config.js       # Vite 설정
├── tailwind.config.js   # Tailwind CSS 설정
├── postcss.config.js    # PostCSS 설정
└── README.md           # 프로젝트 문서
```

## 🚀 설치 및 실행

### 사전 요구사항
- Node.js 16.x 이상
- npm 또는 yarn

### 설치 단계
1. **레포지토리 클론**
   ```bash
   git clone <repository-url>
   cd grok_project_22
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   - 로컬: http://localhost:5175
   - 네트워크: 다른 기기에서 접근 가능

### 빌드 및 배포
1. **프로덕션 빌드**
   ```bash
   npm run build
   ```

2. **빌드 미리보기**
   ```bash
   npm run preview
   ```

3. **배포 플랫폼**
   - **Vercel**: `vercel --prod`
   - **Netlify**: `netlify deploy --prod`
   - **GitHub Pages**: GitHub Actions로 자동 배포

## 🎨 커스터마이징

### 프로젝트 데이터 추가
`src/App.jsx`의 `mvps` 배열에 새 프로젝트 추가:

```javascript
{
  name: "새 프로젝트 이름",
  thumbnail: "/images/project-image.jpg",
  category: "카테고리",
  oneLiner: "한 줄 설명",
  link: "https://project-link.com",
  builtIn: "개발 기간",
  problem: "문제점",
  solution: "해결책",
  techStack: ["기술1", "기술2"],
  learnings: ["학습점1", "학습점2"],
  images: ["/images/image1.jpg"],
  featured: false,
  views: 100,
  rating: 4.5
}
```

### 스타일 커스터마이징
- `tailwind.config.js`: 색상, 폰트 등 테마 설정
- `src/index.css`: 전역 스타일 추가
- 컴포넌트별 Tailwind 클래스 수정

### 3D 배경 커스터마이징
`src/App.jsx`의 `Background3D` 컴포넌트 수정:
- 별 개수, 속도, 색상 조정
- 텍스트 위치 및 스타일 변경
- 마우스 인터랙션 민감도 조정

## 📊 프로젝트 통계

- **총 프로젝트 수**: 55+
- **카테고리 수**: 8개
  - 기업/산업 (11개)
  - 공공/행정 (7개)
  - 복지/의료/돌봄 (12개)
  - 교육/AI/데이터 (3개)
  - 일자리/사회서비스 (1개)
  - 서비스/여행 (2개)
  - 게임/엔터테인먼트 (17개)
  - 대표/통합 (4개)
- **Featured 프로젝트**: 13개
- **총 조회수**: 10K+

## 🔧 개발 및 기여

### 개발 환경 설정
1. **코드 포맷팅**: ESLint 규칙 준수
2. **커밋 컨벤션**: 의미 있는 커밋 메시지 사용
3. **브랜치 전략**: 기능별 브랜치 생성

### 기여 방법
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### 코드 품질
- **ESLint**: 코드 품질 및 일관성 유지
- **Prettier**: 자동 코드 포맷팅 (선택적)
- **TypeScript**: 타입 안전성 향상 (향후 마이그레이션 가능)

## 📈 성능 및 최적화

### 현재 최적화 사항
- **이미지 지연 로딩**: 모든 img 태그에 `loading="lazy"`
- **코드 분할**: Vite 자동 코드 분할
- **PWA 캐싱**: 서비스 워커를 통한 리소스 캐싱
- **반응형 이미지**: Tailwind CSS 반응형 클래스

### 추가 최적화 가능 사항
- **WebP 이미지**: 더 작은 파일 크기
- **Critical CSS**: 초기 로딩 성능 향상
- **Bundle 분석**: `npm run build -- --mode analyze`
- **CDN**: 정적 리소스 CDN 배포

## 🌟 특징 및 장점

### 혁신성
- AI 기반 프로젝트 생성 및 추천
- 3D 인터랙션으로 차별화된 사용자 경험
- PWA로 앱과 웹의 경계 허물기

### 확장성
- 모듈식 아키텍처로 쉬운 기능 추가
- 컴포넌트 기반으로 재사용성 높음
- API 연동 준비로 백엔드 확장 가능

### 접근성
- WCAG 2.1 준수 노력
- 키보드 네비게이션 지원
- 스크린 리더 호환성

## 📞 지원 및 문의

- **이슈 리포트**: GitHub Issues 사용
- **기능 요청**: Discussions 또는 Issues
- **문서 개선**: Pull Request 환영

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

---

**Built with ❤️ by GROK AI** | **Powered by React & Three.js** | **Deployed on Vercel**

*마지막 업데이트: 2025년 11월 23일*
