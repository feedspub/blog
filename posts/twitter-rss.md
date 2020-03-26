---
title: Twitter RSS feeds
date: 2020-03-26
---

Twitter don't offer RSS officially, but still there are some ways to generate it. We will introduce a simple way here by using [RSSHub](https://rsshub.app).

## User Timeline

### 1. Get the id of a user

### 2. Replace `:id` in the following URL

https://rsshub.app/twitter/user/:id/:type?

### 3. Choose a `type`

- `exclude_replies` exclude replies
- `exclude_rts` exclude retweets
- `exclude_rts_replies` exclude replies and retweets
- default: include all.

For example, the feed URL of `jack`(founder of twitter) is:

https://rsshub.app/twitter/user/jack/exclude_rts_replies

## More

You can find more on https://docs.rsshub.app/en/social-media.html#twitter

- List timeline
- User following timeline
- Keyword search
