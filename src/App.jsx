import { useState, useMemo, useEffect, Suspense } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars, Float, Text } from '@react-three/drei'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Doughnut, Bar } from 'react-chartjs-2'
import { Search, Filter, Moon, Sun, Zap, Rocket, Code, Users, Award, ExternalLink, Sparkles } from 'lucide-react'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

// 3D Background Component
function Background3D() {
  const { camera, gl } = useThree()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }
    gl.domElement.addEventListener('mousemove', handleMouseMove)
    return () => gl.domElement.removeEventListener('mousemove', handleMouseMove)
  }, [gl])

  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05
  })

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
          <Text
            position={[0, 0, -2]}
            fontSize={0.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
          >
            GROK PORTFOLIO
          </Text>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  )
}

// Particle Background
function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * window.innerWidth],
            y: [0, Math.random() * window.innerHeight],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  )
}

const mvps = [
  // 기업/산업 (11개)
  {
    name: "바이칼시스템즈 홈페이지",
    thumbnail: "/images/baikal_project_01.jpg",
    category: "기업/산업",
    oneLiner: "기업 홈페이지 구축.",
    link: "https://mvp-project-04.vercel.app/",
    builtIn: "2 weeks",
    problem: "기업 브랜딩 필요.",
    solution: "반응형 웹사이트.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["기업 사이트 디자인.", "SEO 최적화."],
    images: ["/images/baikal_project_01.jpg"],
    featured: true,
    views: 1250,
    rating: 4.8
  },
  {
    name: "만송시스템 홈페이지 (버전2)",
    thumbnail: "/images/mxten_project_30.jpg",
    category: "기업/산업",
    oneLiner: "기업 홈페이지 리뉴얼.",
    link: "https://mxten-project-30.vercel.app/",
    builtIn: "3 weeks",
    problem: "기존 사이트 업데이트.",
    solution: "모던 디자인 적용.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["리뉴얼 프로세스.", "사용자 피드백."],
    images: ["/images/mxten_project_30.jpg"],
    featured: true,
    views: 980,
    rating: 4.7
  },
  {
    name: "한국코프론 홈페이지",
    thumbnail: "/images/mvp_project_03.jpg",
    category: "기업/산업",
    oneLiner: "기업 소개 사이트.",
    link: "https://mvp-project-03.vercel.app/",
    builtIn: "2 weeks",
    problem: "기업 이미지 구축.",
    solution: "프로페셔널 웹사이트.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["기업 커뮤니케이션.", "콘텐츠 전략."],
    images: ["/images/mvp_project_03.jpg"],
    featured: true,
    views: 1450,
    rating: 4.9
  },
  {
    name: "모바일/태블릿 기반 디지털 작업지시서",
    thumbnail: "/images/mxten_project_06.jpg",
    category: "기업/산업",
    oneLiner: "모바일 작업 지시 시스템.",
    link: "https://mxten-project-06.vercel.app/",
    builtIn: "4 weeks",
    problem: "작업 효율성.",
    solution: "디지털화.",
    techStack: ["React", "Mobile-First", "PWA"],
    learnings: ["모바일 UX.", "PWA 구현."],
    images: ["/images/mxten_project_06.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  {
    name: "디비인포 리뉴얼",
    thumbnail: "/images/dbinfo_final.jpg",
    category: "기업/산업",
    oneLiner: "데이터베이스 관리 사이트 리뉴얼.",
    link: "https://dbinfo-final.vercel.app/",
    builtIn: "3 weeks",
    problem: "UI/UX 개선.",
    solution: "모던 인터페이스.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    learnings: ["데이터베이스 통합.", "보안."],
    images: ["/images/dbinfo_final.jpg"],
    featured: false,
    views: 890,
    rating: 4.6
  },
  {
    name: "디비인포 관리자 모드",
    thumbnail: "/images/dbinfo_final_admin.jpg",
    category: "기업/산업",
    oneLiner: "관리자 대시보드.",
    link: "https://dbinfo-final.vercel.app/admin/login",
    builtIn: "2 weeks",
    problem: "관리 기능 필요.",
    solution: "어드민 패널.",
    techStack: ["React", "Auth", "Dashboard"],
    learnings: ["권한 관리.", "보안."],
    images: ["/images/dbinfo_final_admin.jpg"],
    featured: false,
    views: 650,
    rating: 4.4
  },
  {
    name: "만송시스템 홈페이지(버전1)",
    thumbnail: "/images/mvp_project_09.jpg",
    category: "기업/산업",
    oneLiner: "기업 홈페이지 초기 버전.",
    link: "https://mvp-project-09.vercel.app/",
    builtIn: "2 weeks",
    problem: "기업 온라인 존재.",
    solution: "기본 웹사이트.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["웹 개발 기초.", "반응형 디자인."],
    images: ["/images/mvp_project_09.jpg"],
    featured: false,
    views: 580,
    rating: 4.3
  },
  {
    name: "GEN[1] 바이브 오피스 허브",
    thumbnail: "/images/gen_project_01.jpg",
    category: "기업/산업",
    oneLiner: "오피스 허브 플랫폼.",
    link: "https://gen-project-01.vercel.app/",
    builtIn: "3 weeks",
    problem: "오피스 관리.",
    solution: "통합 플랫폼.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["플랫폼 개발.", "통합."],
    images: ["/images/gen_project_01.jpg"],
    featured: false,
    views: 920,
    rating: 4.7
  },
  {
    name: "GEN[2] 회계·재무 자동화 웹앱",
    thumbnail: "/images/gen_project_02.jpg",
    category: "기업/산업",
    oneLiner: "재무 자동화 앱.",
    link: "https://gen-project-02.vercel.app/",
    builtIn: "4 weeks",
    problem: "재무 프로세스.",
    solution: "자동화.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["자동화.", "재무."],
    images: ["/images/gen_project_02.jpg"],
    featured: false,
    views: 1100,
    rating: 4.8
  },
  {
    name: "GEN[3] 인사·교육·채용 자동화 웹앱",
    thumbnail: "/images/gen_project_03.jpg",
    category: "기업/산업",
    oneLiner: "인사 자동화 앱.",
    link: "https://gen-project-03.vercel.app/",
    builtIn: "4 weeks",
    problem: "인사 관리.",
    solution: "자동화 플랫폼.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["HR 자동화.", "채용."],
    images: ["/images/gen_project_03.jpg"],
    featured: false,
    views: 1050,
    rating: 4.7
  },
  {
    name: "GEN[4] MES WorkFlow Hub",
    thumbnail: "/images/gen_project_04.jpg",
    category: "기업/산업",
    oneLiner: "워크플로우 허브.",
    link: "https://gen-project-04.vercel.app/",
    builtIn: "3 weeks",
    problem: "워크플로우 관리.",
    solution: "MES 시스템.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    learnings: ["MES.", "워크플로우."],
    images: ["/images/gen_project_04.jpg"],
    featured: false,
    views: 780,
    rating: 4.5
  },
  // 공공/행정 (7개)
  {
    name: "국회의원 랜딩페이지",
    thumbnail: "/images/law_maker.jpg",
    category: "공공/행정",
    oneLiner: "정치인 랜딩페이지.",
    link: "https://lawmaker-landing.vercel.app/",
    builtIn: "2 weeks",
    problem: "정치 커뮤니케이션.",
    solution: "랜딩페이지.",
    techStack: ["React", "TailwindCSS", "SEO"],
    learnings: ["정치 사이트.", "SEO."],
    images: ["/images/law_maker.jpg"],
    featured: true,
    views: 2100,
    rating: 4.9
  },
  {
    name: "박신환 행정사 홈페이지",
    thumbnail: "/images/new_project_04.jpg",
    category: "공공/행정",
    oneLiner: "행정사 홈페이지.",
    link: "https://new-project-04.vercel.app/",
    builtIn: "2 weeks",
    problem: "행정 서비스.",
    solution: "웹사이트.",
    techStack: ["React", "TypeScript", "Responsive Design"],
    learnings: ["행정.", "반응형."],
    images: ["/images/new_project_04.jpg"],
    featured: false,
    views: 450,
    rating: 4.2
  },
  {
    name: "시군구 RPA 통합 플랫폼 앱",
    thumbnail: "/images/mvp_project_14.jpg",
    category: "공공/행정",
    oneLiner: "RPA 플랫폼.",
    link: "https://mvp-project-14.vercel.app/",
    builtIn: "4 weeks",
    problem: "자동화.",
    solution: "RPA 앱.",
    techStack: ["React", "RPA Integration", "Automation"],
    learnings: ["RPA.", "자동화."],
    images: ["/images/mvp_project_14.jpg"],
    featured: true,
    views: 1650,
    rating: 4.8
  },
  {
    name: "주민 제보·민원 실시간 처리 웹앱",
    thumbnail: "/images/mvp_project_30.jpg",
    category: "공공/행정",
    oneLiner: "민원 처리 앱.",
    link: "https://mvp-project-30.vercel.app/",
    builtIn: "3 weeks",
    problem: "민원 처리.",
    solution: "실시간 앱.",
    techStack: ["React", "Real-time", "Government"],
    learnings: ["정부 앱.", "실시간."],
    images: ["/images/mvp_project_30.jpg"],
    featured: false,
    views: 890,
    rating: 4.6
  },
  {
    name: "공공시설 예약 통합 플랫폼",
    thumbnail: "/images/mvp_project_28.jpg",
    category: "공공/행정",
    oneLiner: "예약 플랫폼.",
    link: "https://mvp-project-28.vercel.app/",
    builtIn: "4 weeks",
    problem: "예약 시스템.",
    solution: "통합 플랫폼.",
    techStack: ["React", "Booking System", "Public API"],
    learnings: ["예약.", "API."],
    images: ["/images/mvp_project_28.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  {
    name: "공공기관 바이브 퍼블릭 허브",
    thumbnail: "/images/pub_project_01.jpg",
    category: "공공/행정",
    oneLiner: "공공 허브.",
    link: "https://pub-project-01.vercel.app/",
    builtIn: "3 weeks",
    problem: "공공 서비스.",
    solution: "허브 플랫폼.",
    techStack: ["React", "Booking System", "Public API"],
    learnings: ["공공.", "허브."],
    images: ["/images/pub_project_01.jpg"],
    featured: false,
    views: 580,
    rating: 4.3
  },
  {
    name: "음성 주문 시스템 (Web Speech API 기반)바이브 오더",
    thumbnail: "/images/pub_project_02.jpg",
    category: "공공/행정",
    oneLiner: "음성 주문 시스템.",
    link: "https://pub-project-02.vercel.app/",
    builtIn: "2 weeks",
    problem: "주문 편의.",
    solution: "음성 API.",
    techStack: ["React", "Booking System", "Public API"],
    learnings: ["음성.", "주문."],
    images: ["/images/pub_project_02.jpg"],
    featured: false,
    views: 650,
    rating: 4.4
  },
  // 복지/의료/돌봄 (12개)
  {
    name: "아이뜨락 어린이집 홈페이지",
    thumbnail: "/images/new_project_02.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "어린이집 홈페이지.",
    link: "https://new-project-02.vercel.app/",
    builtIn: "2 weeks",
    problem: "어린이집 정보.",
    solution: "웹사이트.",
    techStack: ["React", "TailwindCSS", "Family-Friendly"],
    learnings: ["교육.", "가족."],
    images: ["/images/new_project_02.jpg"],
    featured: false,
    views: 420,
    rating: 4.1
  },
  {
    name: "박영진치과 홈페이지",
    thumbnail: "/images/new_project_20.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "치과 홈페이지.",
    link: "https://new-project-20.vercel.app/",
    builtIn: "3 weeks",
    problem: "치과 서비스.",
    solution: "의료 사이트.",
    techStack: ["React", "TypeScript", "Medical UI"],
    learnings: ["의료 UI.", "예약."],
    images: ["/images/new_project_20.jpg"],
    featured: false,
    views: 680,
    rating: 4.5
  },
  {
    name: "약 복용 리마인더 & 가족 알림 앱",
    thumbnail: "/images/mxten_project_10.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "약 리마인더 앱.",
    link: "https://mxten-project-10.vercel.app/",
    builtIn: "2 weeks",
    problem: "약 복용.",
    solution: "리마인더.",
    techStack: ["React", "PWA", "Push Notifications"],
    learnings: ["헬스케어.", "알림."],
    images: ["/images/mxten_project_10.jpg"],
    featured: false,
    views: 950,
    rating: 4.7
  },
  {
    name: "복지용품·공유물품 대여서비스",
    thumbnail: "/images/mvp_project_32.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "대여 서비스.",
    link: "https://mvp-project-32.vercel.app/",
    builtIn: "4 weeks",
    problem: "복지 용품.",
    solution: "대여 플랫폼.",
    techStack: ["React", "TypeScript", "Rental System"],
    learnings: ["대여.", "복지."],
    images: ["/images/mvp_project_32.jpg"],
    featured: false,
    views: 780,
    rating: 4.6
  },
  {
    name: "바이칼 재가복지센터 홈페이지",
    thumbnail: "/images/mvp_project_18.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "복지센터 홈페이지.",
    link: "https://mvp-project-18.vercel.app/",
    builtIn: "3 weeks",
    problem: "복지 서비스.",
    solution: "센터 사이트.",
    techStack: ["React", "TypeScript", "Welfare System"],
    learnings: ["복지.", "센터."],
    images: ["/images/mvp_project_18.jpg"],
    featured: false,
    views: 620,
    rating: 4.4
  },
  {
    name: "재가 복지 센터 통합 관리 시스템",
    thumbnail: "/images/mvp_project_16.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "관리 시스템.",
    link: "https://caring-plus.vercel.app/login",
    builtIn: "4 weeks",
    problem: "관리.",
    solution: "통합 시스템.",
    techStack: ["React", "Management System", "Database"],
    learnings: ["관리.", "데이터베이스."],
    images: ["/images/mvp_project_16.jpg"],
    featured: false,
    views: 1100,
    rating: 4.8
  },
  {
    name: "선우 이비인후과 홈페이지",
    thumbnail: "/images/new_project_30.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "이비인후과 홈페이지.",
    link: "https://new-project-30.vercel.app/",
    builtIn: "3 weeks",
    problem: "의료 서비스.",
    solution: "병원 사이트.",
    techStack: ["React", "Medical UI", "Appointment System"],
    learnings: ["의료.", "예약."],
    images: ["/images/new_project_30.jpg"],
    featured: false,
    views: 750,
    rating: 4.5
  },
  {
    name: "성혜 정형외과 의원 프리미엄 웹사이트",
    thumbnail: "/images/new_project_40.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "정형외과 사이트.",
    link: "https://new-project-40.vercel.app/",
    builtIn: "4 weeks",
    problem: "프리미엄 의료.",
    solution: "웹사이트.",
    techStack: ["React", "Premium Design", "Medical System"],
    learnings: ["프리미엄.", "의료."],
    images: ["/images/new_project_40.jpg"],
    featured: false,
    views: 1200,
    rating: 4.9
  },
  {
    name: "성혜 정형외과 의원 AI 증상 체크",
    thumbnail: "/images/new_project_40_ai.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "AI 증상 체크.",
    link: "https://new-project-40.vercel.app/ai-symptom-check/",
    builtIn: "2 weeks",
    problem: "증상 체크.",
    solution: "AI 도구.",
    techStack: ["React", "AI/ML", "Medical AI"],
    learnings: ["AI 의료.", "증상."],
    images: ["/images/new_project_40_ai.jpg"],
    featured: false,
    views: 1350,
    rating: 4.8
  },
  {
    name: "성혜 정형외과 의원 실시간 예약",
    thumbnail: "/images/new_project_40_app.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "실시간 예약.",
    link: "https://new-project-40.vercel.app/appointment/",
    builtIn: "3 weeks",
    problem: "예약.",
    solution: "실시간 시스템.",
    techStack: ["React", "Real-time Booking", "Medical"],
    learnings: ["예약.", "실시간."],
    images: ["/images/new_project_40_app.jpg"],
    featured: false,
    views: 980,
    rating: 4.7
  },
  {
    name: "시니어 복지정보 알림 앱",
    thumbnail: "/images/mvp_project_08.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "시니어 알림 앱.",
    link: "https://mvp-project-08.vercel.app/",
    builtIn: "2 weeks",
    problem: "시니어 정보.",
    solution: "알림 앱.",
    techStack: ["React", "Push Notifications", "Senior UX"],
    learnings: ["시니어.", "알림."],
    images: ["/images/mvp_project_08.jpg"],
    featured: false,
    views: 560,
    rating: 4.3
  },
  {
    name: "복지 서비스 추천 앱",
    thumbnail: "/images/mvp_project_20.jpg",
    category: "복지/의료/돌봄",
    oneLiner: "복지 추천 앱.",
    link: "https://mvp-project-20.vercel.app/",
    builtIn: "3 weeks",
    problem: "복지 추천.",
    solution: "추천 시스템.",
    techStack: ["React", "Recommendation System", "Welfare API"],
    learnings: ["추천.", "복지."],
    images: ["/images/mvp_project_20.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  // 교육/AI/데이터 (3개)
  {
    name: "AI 기반 맞춤형 교육 플랫폼(바이브에듀)",
    thumbnail: "/images/jdx_project_01.jpg",
    category: "교육/AI/데이터",
    oneLiner: "AI 교육 플랫폼.",
    link: "https://jdx-project-01.vercel.app/",
    builtIn: "4 weeks",
    problem: "맞춤 교육.",
    solution: "AI 플랫폼.",
    techStack: ["React", "AI/ML", "Education Tech"],
    learnings: ["교육.", "AI."],
    images: ["/images/jdx_project_01.jpg"],
    featured: true,
    views: 1850,
    rating: 4.9
  },
  {
    name: "직장인을 위한 AI 기반 맞춤형 교육 플랫폼",
    thumbnail: "/images/jdx_project_02.jpg",
    category: "교육/AI/데이터",
    oneLiner: "직장인 교육 플랫폼.",
    link: "https://jdx-project-02.vercel.app/",
    builtIn: "4 weeks",
    problem: "직장인 교육.",
    solution: "AI 맞춤.",
    techStack: ["React", "AI/ML", "Educational Tech"],
    learnings: ["직장인.", "교육."],
    images: ["/images/jdx_project_02.jpg"],
    featured: true,
    views: 1720,
    rating: 4.8
  },
  {
    name: "MVP Baikal Systems Academy 바이칼 바이브 아키데미",
    thumbnail: "/images/baikal_project_20.jpg",
    category: "교육/AI/데이터",
    oneLiner: "아카데미 플랫폼.",
    link: "https://vibe-academy-mvp.vercel.app/",
    builtIn: "3 weeks",
    problem: "교육 아카데미.",
    solution: "MVP 아카데미.",
    techStack: ["React", "AI/ML", "Educational Tech"],
    learnings: ["아카데미.", "교육."],
    images: ["/images/baikal_project_20.jpg"],
    featured: false,
    views: 920,
    rating: 4.6
  },
  // 일자리/사회서비스 (1개)
  {
    name: "AI 중장년 일자리 플랫폼",
    thumbnail: "/images/mvp_project_06.jpg",
    category: "일자리/사회서비스",
    oneLiner: "중장년 일자리 플랫폼.",
    link: "https://mvp-project-06.vercel.app/",
    builtIn: "4 weeks",
    problem: "중장년 일자리.",
    solution: "AI 플랫폼.",
    techStack: ["React", "AI/ML", "Job Matching"],
    learnings: ["일자리.", "AI."],
    images: ["/images/mvp_project_06.jpg"],
    featured: true,
    views: 1580,
    rating: 4.8
  },
  // 서비스/여행 (2개)
  {
    name: "바이칼리조트 홈페이지 및 예약시스템",
    thumbnail: "/images/mvp_project_26.jpg",
    category: "서비스/여행",
    oneLiner: "리조트 예약 시스템.",
    link: "https://mvp-project-26.vercel.app/",
    builtIn: "3 weeks",
    problem: "리조트 예약.",
    solution: "홈페이지 및 시스템.",
    techStack: ["React", "Booking System", "Tourism"],
    learnings: ["여행.", "예약."],
    images: ["/images/mvp_project_26.jpg"],
    featured: false,
    views: 850,
    rating: 4.6
  },
  {
    name: "AI 주유소 플랫폼",
    thumbnail: "/images/fuel_project_05.jpg",
    category: "서비스/여행",
    oneLiner: "AI 주유소 플랫폼.",
    link: "https://fuel-project-05.vercel.app/",
    builtIn: "2 weeks",
    problem: "주유소 서비스.",
    solution: "AI 플랫폼.",
    techStack: ["React", "AI/ML", "Location API"],
    learnings: ["주유소.", "AI."],
    images: ["/images/fuel_project_05.jpg"],
    featured: true,
    views: 1420,
    rating: 4.7
  },
  // 게임/엔터테인먼트 (17개)
  {
    name: "AI 작사·작곡 도우미 플랫폼",
    thumbnail: "/images/music_project_01.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "AI 음악 도우미.",
    link: "https://music-project-01.vercel.app/",
    builtIn: "4 weeks",
    problem: "음악 창작.",
    solution: "AI 플랫폼.",
    techStack: ["React", "AI/ML", "Music API"],
    learnings: ["음악.", "AI."],
    images: ["/images/music_project_01.jpg"],
    featured: true,
    views: 1950,
    rating: 4.9
  },
  {
    name: "슬롯머신형 일본 파칭코 웹 MVP",
    thumbnail: "/images/mxten_project_10.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "파칭코 게임.",
    link: "https://mxten-project-10.vercel.app/",
    builtIn: "3 weeks",
    problem: "게임 엔터.",
    solution: "웹 게임.",
    techStack: ["React", "TypeScript", "CSS3 Animation"],
    learnings: ["게임.", "애니메이션."],
    images: ["/images/mxten_project_10.jpg"],
    featured: true,
    views: 1680,
    rating: 4.8
  },
  {
    name: "AI 간편장부 앱",
    thumbnail: "/images/mvp_project_12.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "AI 장부 앱.",
    link: "https://mvp-project-12.vercel.app/",
    builtIn: "2 weeks",
    problem: "장부 관리.",
    solution: "AI 앱.",
    techStack: ["React", "AI/ML", "Accounting"],
    learnings: ["장부.", "AI."],
    images: ["/images/mvp_project_12.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  {
    name: "공정한 팀 배정 웹앱",
    thumbnail: "/images/jdx_project_05.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "팀 배정 앱.",
    link: "https://jdx-project-05.vercel.app/",
    builtIn: "2 weeks",
    problem: "팀 배정.",
    solution: "알고리즘 앱.",
    techStack: ["React", "Algorithm", "Team Matching"],
    learnings: ["팀.", "알고리즘."],
    images: ["/images/jdx_project_05.jpg"],
    featured: false,
    views: 580,
    rating: 4.3
  },
  {
    name: "추억 만지기 웹앱",
    thumbnail: "/images/jdx_project_10.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "추억 앱.",
    link: "https://jdx-project-10.vercel.app/",
    builtIn: "3 weeks",
    problem: "추억 관리.",
    solution: "미디어 앱.",
    techStack: ["React", "Cloud Storage", "Media Management"],
    learnings: ["미디어.", "추억."],
    images: ["/images/jdx_project_10.jpg"],
    featured: false,
    views: 650,
    rating: 4.4
  },
  {
    name: "우리끼리 당근(동호당) 웹앱",
    thumbnail: "/images/jdx_project_12.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "커뮤니티 앱.",
    link: "https://jdx-project-12.vercel.app/",
    builtIn: "4 weeks",
    problem: "커뮤니티.",
    solution: "거래 플랫폼.",
    techStack: ["React", "Community Platform", "Trading System"],
    learnings: ["커뮤니티.", "거래."],
    images: ["/images/jdx_project_12.jpg"],
    featured: false,
    views: 890,
    rating: 4.6
  },
  {
    name: "프리미엄 로또 번호 생성기",
    thumbnail: "/images/jdx_project_20.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "로또 생성기.",
    link: "https://jdx-project-20.vercel.app/",
    builtIn: "2 weeks",
    problem: "로또 번호.",
    solution: "AI 생성기.",
    techStack: ["React", "AI/ML", "Statistical Analysis"],
    learnings: ["로또.", "통계."],
    images: ["/images/jdx_project_20.jpg"],
    featured: true,
    views: 2200,
    rating: 4.9
  },
  {
    name: "프리미엄 코인 추천 웹앱",
    thumbnail: "/images/jdx_project_30.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "코인 추천 앱.",
    link: "https://jdx-project-30.vercel.app/",
    builtIn: "3 weeks",
    problem: "코인 추천.",
    solution: "AI 앱.",
    techStack: ["React", "AI/ML", "Crypto API"],
    learnings: ["코인.", "AI."],
    images: ["/images/jdx_project_30.jpg"],
    featured: true,
    views: 1850,
    rating: 4.8
  },
  {
    name: "창작 작품 소개 프리미엄 문학 플랫폼",
    thumbnail: "/images/baikal_project_01.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "문학 플랫폼.",
    link: "https://baikal-project-01.vercel.app/",
    builtIn: "4 weeks",
    problem: "문학 소개.",
    solution: "플랫폼.",
    techStack: ["React", "AI/ML", "Literature"],
    learnings: ["문학.", "플랫폼."],
    images: ["/images/baikal_project_01.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  {
    name: "MVP 신조어 변환 웹앱 (ZLang Decoder)",
    thumbnail: "/images/jdx_project_60.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "신조어 변환.",
    link: "https://jdx-project-60.vercel.app/",
    builtIn: "2 weeks",
    problem: "신조어.",
    solution: "변환 앱.",
    techStack: ["React", "AI/ML", "Language"],
    learnings: ["언어.", "AI."],
    images: ["/images/jdx_project_60.jpg"],
    featured: false,
    views: 580,
    rating: 4.3
  },
  {
    name: "세대소통 AI 플랫폼 Generation Bridge",
    thumbnail: "/images/jdx_project_70.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "세대 소통.",
    link: "https://jdx-project-70.vercel.app/",
    builtIn: "3 weeks",
    problem: "세대 간극.",
    solution: "AI 플랫폼.",
    techStack: ["React", "AI/ML", "Communication"],
    learnings: ["소통.", "세대."],
    images: ["/images/jdx_project_70.jpg"],
    featured: false,
    views: 650,
    rating: 4.4
  },
  {
    name: "AI와 함께하는 요술방방이 같은 프롬프트 자판기",
    thumbnail: "/images/baikal_project_10.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "프롬프트 자판기.",
    link: "https://baikal-project-10.vercel.app/",
    builtIn: "2 weeks",
    problem: "프롬프트.",
    solution: "AI 자판기.",
    techStack: ["React", "AI/ML", "Prompt"],
    learnings: ["프롬프트.", "AI."],
    images: ["/images/baikal_project_10.jpg"],
    featured: false,
    views: 890,
    rating: 4.6
  },
  {
    name: "나만의 시 → 노래 앨범 생성 서비스",
    thumbnail: "/images/music_project_02.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "시 to 노래.",
    link: "https://music-project-02.vercel.app/",
    builtIn: "4 weeks",
    problem: "창작.",
    solution: "생성 서비스.",
    techStack: ["React", "AI/ML", "Music"],
    learnings: ["창작.", "음악."],
    images: ["/images/music_project_02.jpg"],
    featured: false,
    views: 1050,
    rating: 4.7
  },
  {
    name: "BAIKAL[50] 큐패스 AI 기반 스마트 대기표",
    thumbnail: "/images/baikal_project_50.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "대기표 시스템.",
    link: "https://baikal-project-50.vercel.app/",
    builtIn: "3 weeks",
    problem: "대기.",
    solution: "스마트 대기표.",
    techStack: ["React", "AI/ML", "Queue"],
    learnings: ["대기.", "AI."],
    images: ["/images/baikal_project_50.jpg"],
    featured: false,
    views: 720,
    rating: 4.5
  },
  {
    name: "GEN[10] 오산 71회 동기 송년회 웹앱",
    thumbnail: "/images/gen_project_10.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "송년회 앱.",
    link: "https://gen-project-10.vercel.app/",
    builtIn: "2 weeks",
    problem: "송년회.",
    solution: "웹앱.",
    techStack: ["React", "AI/ML", "Event"],
    learnings: ["이벤트.", "앱."],
    images: ["/images/gen_project_10.jpg"],
    featured: false,
    views: 580,
    rating: 4.3
  },
  {
    name: "GEN[20] 표준 QR출입 및 자동 팀배정 플랫폼",
    thumbnail: "/images/gen_project_20.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "QR 출입.",
    link: "https://gen-project-20.vercel.app/",
    builtIn: "3 weeks",
    problem: "출입.",
    solution: "QR 플랫폼.",
    techStack: ["React", "AI/ML", "QR"],
    learnings: ["QR.", "팀."],
    images: ["/images/gen_project_20.jpg"],
    featured: false,
    views: 650,
    rating: 4.4
  },
  {
    name: "GROK[01] VibeRadar - 트렌드 레이더 & MVP 추천 플랫폼",
    thumbnail: "/images/grok_project_01.jpg",
    category: "게임/엔터테인먼트",
    oneLiner: "트렌드 레이더.",
    link: "https://grok-project-01.vercel.app/",
    builtIn: "4 weeks",
    problem: "트렌드.",
    solution: "추천 플랫폼.",
    techStack: ["React", "AI/ML", "Trend"],
    learnings: ["트렌드.", "추천."],
    images: ["/images/grok_project_01.jpg"],
    featured: false,
    views: 1250,
    rating: 4.8
  },
  // 대표/통합 (4개)
  {
    name: "바이칼시스템즈 MVP 소개자료(포트폴리오) 웹앱",
    thumbnail: "/images/mxten_project_15.jpg",
    category: "대표/통합",
    oneLiner: "포트폴리오 웹앱.",
    link: "http://baikalsys.kr/",
    builtIn: "3 weeks",
    problem: "MVP 소개.",
    solution: "포트폴리오.",
    techStack: ["React", "TypeScript", "Framer Motion", "Firebase"],
    learnings: ["포트폴리오.", "소개."],
    images: ["/images/mxten_project_15.jpg"],
    featured: true,
    views: 2100,
    rating: 4.9
  },
  {
    name: "바이브코딩 MVP 포트폴리오2(상세)",
    thumbnail: "/images/mxten_project_20.jpg",
    category: "대표/통합",
    oneLiner: "상세 포트폴리오.",
    link: "https://mxten-project-20.vercel.app/",
    builtIn: "4 weeks",
    problem: "상세 소개.",
    solution: "포트폴리오2.",
    techStack: ["React", "TypeScript", "Framer Motion"],
    learnings: ["상세.", "포트폴리오."],
    images: ["/images/mxten_project_20.jpg"],
    featured: true,
    views: 1950,
    rating: 4.8
  },
  {
    name: "브랜딩 MVP Universe 포트폴리오",
    thumbnail: "/images/jdx_project_50.jpg",
    category: "대표/통합",
    oneLiner: "브랜딩 포트폴리오.",
    link: "https://jdx-project-50.vercel.app/",
    builtIn: "3 weeks",
    problem: "브랜딩.",
    solution: "Universe.",
    techStack: ["React", "3D Graphics", "Creative Design"],
    learnings: ["브랜딩.", "3D."],
    images: ["/images/jdx_project_50.jpg"],
    featured: true,
    views: 1800,
    rating: 4.9
  },
  {
    name: "MVP_포트폴리오 관리 플랫폼",
    thumbnail: "/images/grok_project_10.jpg",
    category: "대표/통합",
    oneLiner: "관리 플랫폼.",
    link: "https://grok-project-10.vercel.app/",
    builtIn: "4 weeks",
    problem: "관리.",
    solution: "플랫폼.",
    techStack: ["React", "3D Graphics", "Creative Design"],
    learnings: ["관리.", "플랫폼."],
    images: ["/images/grok_project_10.jpg"],
    featured: true,
    views: 1650,
    rating: 4.8
  }
]

function App() {
  const [selectedMvp, setSelectedMvp] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const categories = ['All', ...new Set(mvps.map(mvp => mvp.category))]

  const filteredMvps = useMemo(() => {
    return mvps.filter(mvp => {
      const matchesSearch = mvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           mvp.oneLiner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           mvp.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || mvp.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const techStackData = useMemo(() => {
    const techCount = {}
    mvps.forEach(mvp => {
      mvp.techStack.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1
      })
    })
    return {
      labels: Object.keys(techCount),
      datasets: [{
        data: Object.values(techCount),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        borderWidth: 0
      }]
    }
  }, [])

  const categoryData = useMemo(() => {
    const catCount = {}
    mvps.forEach(mvp => {
      catCount[mvp.category] = (catCount[mvp.category] || 0) + 1
    })
    return {
      labels: Object.keys(catCount),
      datasets: [{
        label: 'Projects',
        data: Object.values(catCount),
        backgroundColor: 'rgba(0, 255, 255, 0.6)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 1
      }]
    }
  }, [])

  const recommendedMvps = useMemo(() => {
    return mvps.filter(mvp => mvp.featured).slice(0, 3)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.5
      // Parallax effect for background
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} relative overflow-hidden`}>
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Background3D />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* AI Chat Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('GROK AI: 안녕하세요! 포트폴리오에 대해 궁금한 점이 있으신가요?')}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Hero Section */}
      <motion.header
        className="relative text-center py-32 bg-gradient-to-br from-gray-800/90 via-purple-900/90 to-blue-900/90 backdrop-blur-sm rounded-b-3xl mb-12 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            GROK MVP 포트폴리오
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            AI의 힘으로 탄생한 55+개의 혁신적인 MVP. 미래를 창조하는 프로젝트들을 탐색하세요.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 flex-wrap mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-cyan-400/30" whileHover={{ scale: 1.05 }}>
            <Rocket className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
            <h2 className="text-4xl font-bold">55+</h2>
            <p className="text-gray-300">총 프로젝트</p>
          </motion.div>
          <motion.div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-400/30" whileHover={{ scale: 1.05 }}>
            <Code className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <h2 className="text-4xl font-bold">8</h2>
            <p className="text-gray-300">카테고리</p>
          </motion.div>
          <motion.div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-400/30" whileHover={{ scale: 1.05 }}>
            <Award className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <h2 className="text-4xl font-bold">13</h2>
            <p className="text-gray-300">Featured</p>
          </motion.div>
          <motion.div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-green-400/30" whileHover={{ scale: 1.05 }}>
            <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="text-gray-300">총 조회수</p>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Filters */}
      <motion.section
        className="max-w-6xl mx-auto px-4 mb-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/20">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="AI로 프로젝트 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
              aria-label="프로젝트 검색"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 mb-12 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          혁신적인 MVP 갤러리 ({filteredMvps.length})
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredMvps.map((mvp, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-400/20 cursor-pointer border border-cyan-400/20 relative group"
                onClick={() => setSelectedMvp(mvp)}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {mvp.featured && (
                  <motion.div
                    className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Zap className="w-3 h-3" />
                    Featured
                  </motion.div>
                )}
                <motion.img
                  src={mvp.thumbnail}
                  alt={mvp.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{mvp.name}</h3>
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm mb-2">
                    {mvp.category}
                  </span>
                  <p className="text-gray-300 text-sm mb-2">{mvp.oneLiner}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Built in: {mvp.builtIn}</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {mvp.views}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Data Visualization */}
      <motion.section
        className="max-w-6xl mx-auto px-4 mb-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">데이터 인사이트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">기술 스택 분포</h3>
            <Doughnut data={techStackData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">카테고리별 프로젝트</h3>
            <Bar data={categoryData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </motion.div>
        </div>
      </motion.section>

      {/* AI Recommendations */}
      <motion.section
        className="max-w-6xl mx-auto px-4 mb-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <motion.button
            onClick={() => setShowRecommendations(!showRecommendations)}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full font-bold text-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 inline mr-2" />
            GROK AI 추천 프로젝트
          </motion.button>
        </div>
        <AnimatePresence>
          {showRecommendations && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {recommendedMvps.map((mvp, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/30"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedMvp(mvp)}
                >
                  <h3 className="text-lg font-bold mb-2">{mvp.name}</h3>
                  <p className="text-sm text-gray-300">{mvp.oneLiner}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded">AI 추천</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMvp && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMvp(null)}
          >
            <motion.div
              className="bg-gray-800/95 backdrop-blur-md rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="float-right text-2xl hover:text-red-400 transition-colors"
                onClick={() => setSelectedMvp(null)}
                whileHover={{ scale: 1.2 }}
              >
                &times;
              </motion.button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {selectedMvp.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${selectedMvp.name} ${i+1}`}
                    className="w-full rounded-2xl shadow-2xl"
                    loading="lazy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              <motion.h2
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedMvp.name}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-2"><strong className="text-cyan-400">카테고리:</strong> {selectedMvp.category}</p>
                  <p className="mb-2"><strong className="text-cyan-400">한 줄 설명:</strong> {selectedMvp.oneLiner}</p>
                  <p className="mb-2"><strong className="text-cyan-400">개발 기간:</strong> {selectedMvp.builtIn}</p>
                  <p className="mb-4"><strong className="text-cyan-400">조회수:</strong> {selectedMvp.views} | <strong className="text-cyan-400">평점:</strong> {selectedMvp.rating}/5</p>
                  <h3 className="text-xl font-bold mt-6 mb-3 text-purple-400">문제점</h3>
                  <p className="mb-4">{selectedMvp.problem}</p>
                  <h3 className="text-xl font-bold mt-6 mb-3 text-green-400">해결책</h3>
                  <p>{selectedMvp.solution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">기술 스택</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMvp.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-orange-400">주요 학습점</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedMvp.learnings.map((learning, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {learning}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.a
                href={selectedMvp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                라이브 프로젝트 방문
              </motion.a>
              <div className="flex gap-4 mt-4">
                <motion.button
                  onClick={() => navigator.share({
                    title: selectedMvp.name,
                    text: selectedMvp.oneLiner,
                    url: selectedMvp.link
                  })}
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  공유하기
                </motion.button>
                <motion.a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedMvp.name + ' - ' + selectedMvp.oneLiner)}&url=${encodeURIComponent(selectedMvp.link)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-full text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Twitter 공유
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        className="text-center py-16 bg-gradient-to-t from-gray-900 to-transparent relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold mb-4">GROK의 혁신적인 포트폴리오</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              AI의 힘으로 탄생한 이 포트폴리오는 단순한 프로젝트 모음이 아닙니다.
              미래를 창조하는 혁신의 산증인입니다.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>Built with ❤️ by GROK AI</span>
              <span>•</span>
              <span>Powered by React & Three.js</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
