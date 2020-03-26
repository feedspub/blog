---
title: YouTube RSS feeds
date: 2020-03-22
---

## 1. Get RSS feed of a user

### 1.1 Get username of a user from URL

![](https://raw.githubusercontent.com/timqian/images/master/20200319171847.png)

### 1.2 Replace `[username]` in the following URL

```
https://www.youtube.com/feeds/videos.xml?user=[username]
```

For example, the feed URL of `PewDiePie` is:

https://www.youtube.com/feeds/videos.xml?user=PewDiePie

## 2. Get RSS feed of a channel

### 2.1 Get id of a channel from URL

![](https://raw.githubusercontent.com/timqian/images/master/20200319171848.png)

### 2.2 Replace `[channel_id]` in the following URL

```
https://www.youtube.com/feeds/videos.xml?channel_id=[channel_id]
```

For example, the feed URL of `Liziqi` is:

https://www.youtube.com/feeds/videos.xml?channel_id=UCoC47do520os_4DBMEFGg4A

## 3. Get RSS feed of a playlist

### 3.1 Get id of a playlist from URL

![](https://raw.githubusercontent.com/timqian/images/master/20200319174906.png)

### 3.2 Replace `[playlist]` in the following URL

```
https://www.youtube.com/feeds/videos.xml?playlist_id=[playlist]
```

For example, the feed URL of `Quantum computing for the determined` is:

https://www.youtube.com/feeds/videos.xml?playlist_id=PL1826E60FD05B44E4

## References

- [Discussions on Reddit](https://www.reddit.com/r/youtube/comments/339idg/youtube_just_dropped_its_support_for_rssatom_feeds)
- [Disscussions on Quora](https://www.quora.com/How-do-I-get-the-RSS-feed-for-a-YouTube-channel)
- [Disscussions on StackExchange](https://webapps.stackexchange.com/questions/103017/single-rss-feed-for-all-youtube-subscriptions)