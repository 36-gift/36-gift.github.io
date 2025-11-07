---
layout: page
title: 随笔
---
<div class="post-list simple-list">
  <ul>
    {% for note in site.notes %}
      <li>
        <a href="{{ note.url | relative_url }}">
          {{ note.title }}
          <span class="post-date">{{ note.date | date: "%Y-%m-%d" }}</span>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
