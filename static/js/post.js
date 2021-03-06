---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    // share();
    renderComment();
});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function renderComment() {
    const data = window.location.pathname.split('/')
    console.log(decodeURI(data[2]))

    var gittalk = new Gitalk({
        id: decodeURI(data[2]),
        clientID: '{{site.comment.client_id}}',
        clientSecret: '{{site.comment.client_secret}}',
        owner: '{{site.github.username}}',
        repo: '{{site.comment.repo}}',
        admin: '{{site.github.admin}}'.split(' '),
        perPage: 20,
        distractionFreeMode: false,
        createIssueManually: true,
    });

    gittalk.render('post-comment')
    $("#post-comment").removeClass('hidden');
}


