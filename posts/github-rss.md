---
title: GitHub RSS feeds
date: 2020-03-26
---

> Official doc: https://developer.github.com/v3/activity/feeds/

## GitHub global public timeline

- URL: https://github.com/timeline

## Releases of a repo

- Format: https://github.com/:owner/:repo/releases.atom

### For example

- New Release of linux: https://github.com/torvalds/linux/releases.atom

## Commits of a repo

- Format: https://github.com/:owner/:repo/commits.atom

### For example

- New commits to linux: https://github.com/torvalds/linux/commits.atom

## Activities of user

- Format: https://github.com/:user.atom

### For example

- Activities of `torvalds`: https://github.com/:torvalds.atom

## Private news feed

- Format: https://github.com/:user.private.atom?token=:secret (You can find `Subscribe to your news feed` link in [dashboard page](https://github.com) after login)


## Third party

RSSHub(https://docs.rsshub.app/en/programming.html#github) offers more kinds of feeds, for example

- New Followers of a user: https://rsshub.app/github/user/followers/timqian
- Stars of a repo: https://rsshub.app/github/stars/DIYGod/RSSHub
- Issues of a repo: https://rsshub.app/github/issue/DIYgod/RSSHub/all/bug
