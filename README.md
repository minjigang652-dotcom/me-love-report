# ME — 내 연애스타일 분석 (MVP)

45개 상황형 문항으로 18개 연애 수치를 계산하고, 12개 아키타입 중 나의 유형을 찾아주는 자기이해 콘텐츠.

- **Stack**: Next.js 14 (App Router) · TypeScript · Tailwind CSS
- **State**: localStorage (`lib/storage.ts` 어댑터 — 나중에 Supabase로 교체 가능)
- 심리 진단이 아닌 자기이해 콘텐츠입니다.

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:3000
```

## 스크립트

```bash
npm run build          # 프로덕션 빌드
npm run start          # 빌드 결과 실행
npm run test           # 계산 엔진 유닛 테스트 (56 케이스)
npm run validate:data  # 문항/데이터 무결성 검증 (15 검사)
npm run typecheck      # 타입 체크
```

## 라우트

| 경로 | 설명 |
|---|---|
| `/` | 홈 / 테스트 소개 |
| `/test` | 45문항 테스트 (자동저장·이어하기) |
| `/result` | 무료 맛보기 결과 리포트 |
| `/dev/me-debug` | 개발용 계산 디버그 (실서비스 비노출 권장) |

## 구조

```
data/       문항·수치·캐릭터 centroid (정답 데이터)
lib/        scoring · characterClassifier · otherAnswerClassifier · resultInsights · storage
components/ test/*  results/*
app/        홈 · test · result · dev/me-debug
__tests__/  검증 스위트
```

## 배포 (Vercel)

GitHub 리포지토리를 [vercel.com](https://vercel.com) 에서 Import 하면 별도 설정 없이 배포됩니다.
Framework: Next.js 자동 감지 · Build: `next build` · Node 18+.
MVP는 환경변수가 필요 없습니다(모든 상태는 브라우저 localStorage).
