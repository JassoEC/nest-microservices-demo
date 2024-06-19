<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Proof of concept NestJs Microservices architecture

## Local setup

**1. Git clone**

```
 git@github.com:PlayShake/microservices-testing.git

```

**1.1 install dependencies**

```
 cd microservices-testing && yarn install
```

**1.2 Create .env files**

```
create copy of .env.template and rename it into .env
```

**2. run (Init rabbitmq instance)**

```
docker compose up -d
```

**3. Run:**

```
yarn start:gateway
yarn start:a
yarn start:b
```
