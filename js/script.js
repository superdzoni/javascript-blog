'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked');

  /* [DONE] remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('targetArticle');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(articleSelector);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
  console.log('Article is visible');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){
  console.log('Title List was generated');
  console.log(customSelector);

  /* [DONE] remove contents of TitleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* find all the articles and save them to variable: articles */

  /* [DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  console.log(optArticleSelector + customSelector);
  for(let article of articles){

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId');

    /* [DONE] find the title element */

    /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('Created HTML of the link');

    /* [DONE] insert link into html variable */

    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }
}

generateTitleLinks();

function generateTags(){
  console.log('Tags were generated');

  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('Articles were found');

  /* [DONE] START LOOP: for every article: */

  for(let article of articles){

    /* [DONE] find tags wrapper */

    const titleList = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      console.log(tag);

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li> ';
      console.log('Created HTML of the link');

      /* [DONE] add generated code to html variable */

      html = html + linkHTML;
      console.log(html);

      /* END LOOP: for each tag */

    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    titleList.innerHTML = html;

  }

  /* END LOOP: for every article: */

}

generateTags();

function tagClickHandler(event){
  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log('Tag was clicked');

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link */

  for(let activeTagLink of activeTagLinks){

    /* [DONE] remove class active */

    activeTagLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */

  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const TagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for(let TagLink of TagLinks){

    /* [DONE] add class active */

    TagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */

  const allTagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */

  for(let allTagLink of allTagLinks){

    /* add tagClickHandler as event listener for that link */

    allTagLink.addEventListener('click', tagClickHandler);
    console.log(allTagLink);

  /* END LOOP: for each link */
  }
}


addClickListenersToTags();


console.log(optArticleAuthorSelector);

function generateAuthors(){
  console.log('Authors were generated');

  /* [DONE] Find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* [DONE] Start loop for every article */

  for(let article of articles){

    /* [DONE] find authors wrapper */

    const titleList = article.querySelector(optArticleAuthorSelector);
    console.log(article);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get author from data-author attribute */

    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);

    /* [DONE] generate HTML of the link */

    const linkHTML = '<a href ="#' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
    console.log('Created html of the link');

    /* [DONE] add generated code to html variable */

    html = html + linkHTML;
    console.log(html);

    /* [DONE] insert HTML of all the links into the authors wrapper */

    titleList.innerHTML = html;

    /* [DONE] End loop for every article */

  }
}

generateAuthors();

function authorClickHandler(event){

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make a new constant named "ClickedElement" and give it value of "this" */

  const clickedElement = this;
  console.log('Author was clicked');

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* [IN PROGRESS] make a new constant author and extract author from the href  constant */

  const author = href.replace();

  /* [IN PROGRESS] find all authors links with class active */

  const activeAuthorLinks = document.querySelectorAll();

  /* [DONE] start loop for each active author link */

  for(let activeAuthorLink of activeAuthorLinks){

    /* [DONE] remove class active */

    activeAuthorLink.classList.remove('active');

    /* end loop for each active author link */

  }

  /* [IN PROGRESS] find all author links with href attribute equal to the href constant */

  const AuthorLinks = document.querySelectorAll();

  /* [DONE] start loop for each found author link */

  for(let AuthorLink of AuthorLinks){

    /* [DONE] add class active */

    AuthorLink.classList.add('active');

    /* [DONE] end loop for each found author link */

  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');

}

function addClickListenersToAuthors(){

  /* [IN PROGRESS] find all links to authors */

  const allAuthorLinks = document.querySelectorAll('a[href^=""]');

  /* [DONE] start loop: for each link */

  for(let allAuthorLink of allAuthorLinks){

    /* [DONE] add AuthorClickHandler as event listener for that link */

    allAuthorLink.addEventListener('click', AuthorClickHandler);
    console.log(allAuthorLink);

  /* [DONE] end loop: for each link */
  }
}

addClickListenersToAuthors();

