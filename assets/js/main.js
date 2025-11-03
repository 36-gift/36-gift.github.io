// Welcome to your main JavaScript file!
// You can add interactive features to your blog here in the future.

console.log("落叶的博客加载成功！");


// Example of a future function:
/*
document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the page is fully loaded
    // e.g., setting up a "back to top" button
});
*/


// 当整个页面加载完成后，执行这段代码
document.addEventListener('DOMContentLoaded', function() {
    // 找到 id 为 'current-year' 的元素
    const yearSpan = document.getElementById('current-year');
    
    // 如果找到了这个元素
    if (yearSpan) {
        // 获取当前年份，并设置到元素的文本内容中
        yearSpan.textContent = new Date().getFullYear();
    }
});


  // 根据当前页面路径，决定执行哪个函数
    const path = window.location.pathname.split("/").pop();

    if (path === 'index.html' || path === '') {
        renderPosts(postsData, '#posts-list-container');
    } else if (path === 'tags.html') {
        renderTagsPage();
        setupSearch();
    } else if (path === 'archive.html') {
        renderArchivePage();
    }
});

// 渲染文章列表 (用于首页)
function renderPosts(posts, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // 按日期降序排序
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sortedPosts.map(post => `
        <article class="minimal-post-item">
            <h2><a href="${post.url}">${post.title}</a></h2>
            <div class="minimal-post-meta">
                <span>${post.date}</span> / 
                <span>${post.readTime} min read</span> / 
                ${post.tags.map(tag => `<span>#${tag}</span>`).join(' ')}
            </div>
        </article>
    `).join('');
}

// 渲染分类/标签页面
function renderTagsPage() {
    const container = document.getElementById('tags-list-container');
    if (!container) return;

    const tagsMap = {};
    postsData.forEach(post => {
        post.tags.forEach(tag => {
            if (!tagsMap[tag]) {
                tagsMap[tag] = [];
            }
            tagsMap[tag].push(post);
        });
    });

    container.innerHTML = Object.keys(tagsMap).sort().map(tag => `
        <div class="tag-category-card">
            <h3><i class="fas fa-folder"></i> ${tag}</h3>
            <ul>
                ${tagsMap[tag].map(post => `
                    <li><a href="${post.url}">${post.title}</a></li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// 渲染归档页面
function renderArchivePage() {
    const container = document.getElementById('archive-list-container');
    if (!container) return;

    const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let currentYear = '';
    container.innerHTML = sortedPosts.map(post => {
        const year = new Date(post.date).getFullYear();
        let yearHtml = '';
        if (year !== currentYear) {
            currentYear = year;
            yearHtml = `<h3 class="archive-year">${year}</h3>`;
        }
        const monthDay = post.date.substring(5); // "10-24"
        return `
            ${yearHtml}
            <div class="archive-item">
                <a href="${post.url}" class="archive-title">${post.title}</a>
                <span class="archive-date">${monthDay}</span>
            </div>
        `;
    }).join('');
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const container = document.getElementById('tags-list-container');
    if (!searchInput || !container) return;

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (!query) {
            renderTagsPage(); // 如果搜索框为空，恢复原始列表
            return;
        }

        // 过滤文章
        const filteredPosts = postsData.filter(post => 
            post.title.toLowerCase().includes(query) || 
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        // 显示过滤结果，而不是分类
        container.innerHTML = `
        <div class="search-results-card">
             <h3><i class="fas fa-search"></i> 搜索结果</h3>
             <ul>
                ${filteredPosts.length > 0 ? filteredPosts.map(post => `
                    <li><a href="${post.url}">${post.title}</a></li>
                `).join('') : '<li>没有找到相关内容</li>'}
            </ul>
        </div>`;
    });
}
