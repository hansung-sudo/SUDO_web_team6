# SUDO_web_team6

## 전체 실행

이 저장소는 하나의 스택으로 실행됩니다.
- web: `mainpage/`를 서빙하는 Nginx
- backend: Express API
- db: MySQL

```bash
docker compose up -d --build
```

브라우저에서 `http://localhost`를 열면 됩니다.

## 서버 배포

GitHub Actions 워크플로우는 `develop` 브랜치에 push되면 실행됩니다. 웹과 백엔드 이미지를 모두 빌드해서 OCIR에 올리고, SSH로 서버에 접속해 스택을 재시작합니다.

필수 Secrets:
- `OCIR_REGISTRY`
- `OCIR_NAMESPACE`
- `OCIR_USERNAME`
- `OCIR_PASSWORD`
- `SSH_HOST`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_PORT`
- `DEPLOY_PATH`

서버에는 Docker와 Docker Compose가 설치되어 있어야 하고, GitHub Actions에서 SSH 접속이 가능해야 합니다.

## API 라우팅

웹 컨테이너는 `/api`와 `/health`를 백엔드 서비스로 프록시합니다. 그래서 프론트엔드는 백엔드 호스트를 따로 적지 않고 `/api/applicants`를 호출하면 됩니다.
