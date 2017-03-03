# daily-signin

smzdm, v2ex daily signin script

smzdm, v2ex 每日签到脚本

# Getting Start

## Enviroment

### 中文

 - `SITE`，smzdm or v2ex，默认是 smzdm
 - `DUSERNAME`，对应站点的用户名
 - `DPASSWORD`，对应站点的密码

### EN

 - `SITE`, smzdm or v2ex, default is smzdm
 - `DUSERNAME`, username of your account
 - `DPASSWORD`, password of yuur account

## Docker

```shell
docker --rm \
  -e SITE=smzdm \
  -e DUSERNAME=username \
  -e DPASSWORD=password \
  run playdingnow/daily-signin
```
