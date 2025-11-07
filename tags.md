---
layout: page
title: 标签
---
<div class="tag-list">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <div class="tag-group">
      <h2 id="{{ tag[0] | cgi_escape }}">{{ tag[0] }}</h2>
      <ul>
        {% for post in tag[1] %}
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
