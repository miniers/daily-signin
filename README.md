# daily-signin

smzdm, v2ex daily signin script

smzdm, v2ex 每日签到脚本

# Getting Start

通过配置参数，便可一键使用

## Enviroment

| NAME| CN | EN  |
| --- | --- | --- |
| SITE | smzdm or v2ex，默认是 smzdm | smzdm or v2ex, default is smzdm |
| DUSERNAME | 对应站点的用户名 | username of your account |
| DPASSWORD | 对应站点的密码 | password of yuur account |

## Docker

```shell
docker run --rm \
  -e SITE=smzdm \
  -e DUSERNAME=username \
  -e DPASSWORD=password \
  playdingnow/daily-signin
```

### Docker Example Output

![](http://om4h4iqhe.bkt.clouddn.com/daily-signin-docker-output.png)
