# daily-signin

smzdm, v2ex, jd daily signin script

smzdm, v2ex, jd 每日签到脚本

# Getting Start

通过配置参数，便可一键使用

## Enviroment

| NAME| CN | EN  |
| --- | --- | --- |
| SITE | 默认是 smzdm，[avaliable sites](#avaliable-sites) | smzdm or v2ex or jd, [avaliable sites](#avaliable-sites) |
| DUSERNAME | 对应站点的用户名 | username of your account |
| DPASSWORD | 对应站点的密码 | password of yuur account |


## Avaliable Sites

 - [smzdm](https://smzdm.com)
 - [v2ex](https://v2ex.com)
 - [jd](https://jd.com)

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
