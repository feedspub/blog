const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const { Feed } = require('feed');
const md = new MarkdownIt();

const baseURL = 'https://blog.feeds.pub';
const blogTitle = "Feeds Pub Blog";
const blogsDir = '/Users/timqian/Documents/Code/feeds-pub/blog/posts';
const wrapperDir = '/Users/timqian/Documents/Code/feeds-pub/blog/scripts/themes/feeds.pub';
const postWrapperPath = path.join(wrapperDir, 'post.html');
const indexWrapperPath = path.join(wrapperDir, 'index.html');
const cssPath = path.join(wrapperDir, 'common.css');
const faviconPath = path.join(wrapperDir, 'favicon.ico');
const destDir = '/Users/timqian/Documents/Code/feeds-pub/blog/public';

// copy assets
fs.copyFileSync(cssPath, path.join(destDir, 'common.css'));
fs.copyFileSync(faviconPath, path.join(destDir, 'favicon.ico'));

const postWrapper = fs.readFileSync(postWrapperPath, 'utf-8');

const blogPaths = fs.readdirSync(blogsDir);
// console.log(blogPaths)

// generate posts and return posts info
const allPosts = blogPaths.map(mdFileName => {
  const fullPath = path.join(blogsDir, mdFileName);
  // console.log(fullPath);

  const mdContent = fs.readFileSync(fullPath, 'utf-8');
  // console.log(mdContent);

  // TODO: robuster way to get title and date
  const contentArr = mdContent.split('\n');
  if (contentArr.length < 4) {
    console.log('invalid file', mdFileName);
    return null;
  }
  const title = contentArr[1].slice(7).trim();
  const date = contentArr[2].slice(6).trim();
  const mdContentWithoutTitleDate = contentArr.slice(4).join('\n');

  const blogHTML = md.render(mdContentWithoutTitleDate);
  // console.log(blogHTML);

  const resHTML = postWrapper
    .replace(/{{title}}/g, title)
    .replace('{{content}}', blogHTML)
    .replace('{{createdDate}}', date);

  const htmlFileName = mdFileName.replace('.md', '.html');
  const destFilePath = path.join(destDir, htmlFileName);
  fs.writeFileSync(destFilePath, resHTML);

  return {
    htmlFileName,
    title,
    date,
  }
}).filter(post => !!post);

// Generate index.html
const indexWrapper = fs.readFileSync(indexWrapperPath, 'utf-8');

const postListHtml = allPosts.map(post => {
  const {
    htmlFileName,
    title,
    date,
  } = post;

  return `
    <div class="index-post-wrapper">
      <span class="date">${date}</span>
      <a class="index-post-title" href="./${htmlFileName}">${title}</a>
      <a href="/${htmlFileName}">Read more</a>
    </div>
  `;
}).join('')

const resIndexHTML = indexWrapper
  .replace(/{{title}}/g, blogTitle)
  .replace('{{blogList}}', postListHtml);

const destFilePath = path.join(destDir, 'index.html');
fs.writeFileSync(destFilePath, resIndexHTML);

// Generate RSS
const feed = new Feed({
  title: 'Feeds Pub Blog',
  description: 'Updates on feeds.pub',
  link: 'https://blog.feeds.pub',
  author: {
    name: "Tim Qian",
    email: "timqian@t9t.io",
    link: "https://timqian.com"
  }
});

allPosts.forEach(post => {
  const {
    htmlFileName,
    title,
    date,
  } = post;

  feed.addItem({
    title,
    date: new Date(date),
    link: `${baseURL}/${htmlFileName}`,
  })
});

const RSSXML = feed.rss2();
const destRSSPath = path.join(destDir, 'rss.xml');
fs.writeFileSync(destRSSPath, RSSXML);
