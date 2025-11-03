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
