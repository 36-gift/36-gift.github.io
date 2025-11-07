---
layout: page
title: 文章
---

<div class="post-list">
  {% for category in site.categories %}
    <div class="category-group">
      <h2 id="{{ category[0] | cgi_escape }}">{{ category[0] }}</h2>
      <ul>
        {% for post in category[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
              <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
