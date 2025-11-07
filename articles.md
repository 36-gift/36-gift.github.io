---
layout: page
title: 文章
---
<div class="post-list">
  {% assign categories = site.posts | group_by: "categories" %}
  {% for category in categories %}
    <div class="category-group">
      <h2 id="{{ category.name | cgi_escape }}">{{ category.name }}</h2>
      <ul>
        {% for post in category.items %}
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
