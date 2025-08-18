# Staking Community Version Setup Guide

This document provides a step-by-step guide to set up and run the **staking-community-version** service in both development and production environments.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Variables](#environment-variables)
3. [Project Installation](#project-installation)
4. [Running in Development](#running-in-development)
5. [Building and Running in Production](#building-and-running-in-production)
6. [Linting and Formatting](#linting-and-formatting)

---

## 🔧 Prerequisites

- **Node.js** v20 or higher (LTS recommended)
- **npm** v10 or higher (or **pnpm**)
- **Git** client

> Check versions:
> ```bash
> node -v
> npm -v
> ```

---

## 📦 Project Installation

```bash
# Clone the repository
git clone tokamak-network/staking-community-version
cd staking-community-version

# Install dependencies using npm
npm install

# Or using pnpm
pnpm install
```

---

## 🚀 Running in Development

Start the local development server:

```bash
npm run dev
```

- The app will be available at `http://localhost:3000`.
- Hot-reloading enabled for rapid development.

---

## 📈 Building and Running in Production

1. **Build** the optimized production bundle:
   ```bash
   npm run build
   ```

2. **Start** the production server:
   ```bash
   npm start
   ```

- Uses Next.js production server with performance optimizations.

## 🌐 Vercel 배포 (권장)

이 프로젝트는 Vercel을 통해 배포하는 것을 권장합니다.

### Vercel 배포 방법

1. **Vercel 계정 생성**:
   - [vercel.com](https://vercel.com)에서 GitHub 계정으로 로그인

2. **프로젝트 연결**:
   - "New Project" 클릭
   - GitHub 저장소 `staking-community-version` 선택
   - Framework Preset: Next.js (자동 감지)
   - "Deploy" 클릭

3. **자동 배포**:
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - 커스텀 도메인 설정 가능

4. **배포 URL**:
   - `https://staking-community-version-[username].vercel.app`에서 접근 가능

### Vercel의 장점

✅ **Next.js 완벽 지원** - 클라이언트/서버 컴포넌트 모두 지원  
✅ **Web3 앱 최적화** - 블록체인 앱에 특화된 설정  
✅ **무료 호스팅** - 개인 프로젝트 무료  
✅ **자동 SSL** - HTTPS 자동 설정  
✅ **글로벌 CDN** - 빠른 로딩 속도  

### 로컬 개발

```bash
npm run dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

---

## 🧹 Linting and Formatting

Ensure code quality by running ESLint:

```bash
npm run lint
```

