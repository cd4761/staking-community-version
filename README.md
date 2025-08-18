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

## 🌐 GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 자동 배포 설정

1. **GitHub 저장소 설정**:
   - GitHub 저장소의 Settings → Pages로 이동
   - Source를 "GitHub Actions"로 설정

2. **배포 트리거**:
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - GitHub Actions에서 빌드 및 배포 과정을 확인할 수 있습니다

3. **배포 URL**:
   - 배포 후 `https://[username].github.io/staking-community-version`에서 접근 가능

### 수동 배포

로컬에서 빌드하여 배포하려면:

```bash
npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

---

## 🧹 Linting and Formatting

Ensure code quality by running ESLint:

```bash
npm run lint
```

