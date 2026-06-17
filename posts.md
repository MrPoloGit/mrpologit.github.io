---
layout: default
title: Posts
---

## Posts

**[Back](index)**

---

{% if site.posts.size > 0 %}
{% for post in site.posts %}
**[{{ post.title }}]({{ post.url | relative_url }})** — {{ post.date | date: "%B %d, %Y" }}

{{ post.description | default: post.excerpt | strip_html | truncatewords: 30 }}

---
{% endfor %}
{% else %}
No posts yet — check back soon.
{% endif %}
