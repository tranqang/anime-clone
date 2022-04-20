$(document).ready(function () {
  $(".labelCategory").on("click", function () {
    $(".openSubCategoriesIcon").toggleClass("fa-caret-right");
    $(".openSubCategoriesIcon").toggleClass("fa-caret-down");
  });
  const homeProductsData = {
    trend: {
      title: "trending now",
      names: [
        "The Seven Deadly Sins: Wrath of the Gods",
        "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien",
        "Shingeki no Kyojin Season 3 Part 2",
        "Fullmetal Alchemist: Brotherhood",
        "Shiratorizawa Gakuen Koukou",
        "Code Geass: Hangyaku no Lelouch R2",
      ],
    },
    popular: {
      title: "popular shows",
      names: [
        "Sen to Chihiro no Kamikakushi",
        "Kizumonogatari III: Reiket su-hen",
        "Shirogane Tamashii hen Kouhan sen",
        "Rurouni Kenshin: Meiji Kenkaku Romantan",
        "Mushishi Zoku Shou 2nd Season",
        "Monogatari Series: Second Season",
      ],
    },
    recent: {
      title: "recently added shows",
      names: [
        "Great Teacher Onizuka",
        "Fate/stay night Movie: Heaven's Feel - II. Lost",
        "Mushishi Zoku Shou: Suzu no Shizuku",
        "Fate/Zero 2nd Season",
        "Kizumonogatari II: Nekket su-hen",
        "The Seven Deadly Sins: Wrath of the Gods",
      ],
    },
    live: {
      title: "live action",
      names: [
        "Shouwa Genroku Rakugo Shinjuu",
        "Mushishi Zoku Shou 2nd Season",
        "Mushishi Zoku Shou: Suzu no Shizuku",
        "The Seven Deadly Sins: Wrath of the Gods",
        "Fate/stay night Movie: Heaven's Feel - II. Lost",
        "Kizumonogatari II: Nekketsu-hen",
      ],
    },
    "top-views": {
      title: "top views",
      names: [
        "Boruto: Naruto next generations",
        "The Seven Deadly Sins: Wrath of the Gods",
        "Fate/stay night: Heaven's Feel I. presage flower",
        "Fate stay night unlimited blade works",
      ],
    },
    comment: {
      title: "new comment",
      names: [
        "The Seven Deadly Sins: Wrath of the Gods",
        "Shirogane Tamashii hen Kouhan sen",
        "Kizumonogatari III: Reiket su-hen",
        "Monogatari Series: Second Season",
      ],
    },
  };

  function sectionUrlImage(sectionName, number, format) {
    return `/asset/img/${sectionName}/${sectionName}-${number}.${format}`;
  }
  function setProduct(sectionName, countItem, format) {
    $(`.${sectionName}__products .section__title`).text(
      homeProductsData[sectionName].title
    );
    for (let i = 0; i < countItem; i++) {
      $(`.${sectionName}__products .product-item__img`)
        .eq(i)
        .css(
          "background-image",
          "url(" + sectionUrlImage(sectionName, i + 1, format) + ")"
        );
      $(`.${sectionName}__products .product-item__name a`)
        .eq(i)
        .text(homeProductsData[sectionName].names[i]);
    }
  }

  setProduct("trend", 6, "jpg.webp");
  setProduct("popular", 6, "jpg.webp");
  setProduct("recent", 6, "jpg.webp");
  setProduct("live", 6, "jpg.webp");

  function setBanner(sectionName, countItem, format) {
    for (let i = 0; i < countItem; i++) {
      $(`.banner__${sectionName} .${sectionName}__name a`)
        .eq(i)
        .text(homeProductsData[sectionName].names[i]);

      if (sectionName === "top-views") {
        $(`.banner__${sectionName} .${sectionName}__item`)
          .eq(i)
          .css(
            "background-image",
            "url(" + sectionUrlImage(sectionName, i + 1, format) + ")"
          );
      } else {
        $(`.banner__${sectionName} .${sectionName}-item img`)
          .eq(i)
          .prop("src", sectionUrlImage(sectionName, i + 1, format));
      }
    }
  }
  setBanner("top-views", 5, "jpg.webp");
  setBanner("comment", 4, "webp");

  $("#scrollToTop").on("click", function () {
    $(window).scrollTop(0);
  });

  let countCategory = 0;
  function setCategory(category, sectionName, countItem, format) {
    for (let i = 0; i < countItem; i++) {
      $(`.${category}__products .product-item__img`)
        .eq(countCategory)
        .css(
          "background-image",
          "url(" + sectionUrlImage(sectionName, i + 1, format) + ")"
        );
      $(`.${category}__products .product-item__name a`)
        .eq(countCategory)
        .text(homeProductsData[sectionName].names[i]);
      countCategory++;
    }
  }
  setCategory("romance", "popular", 6, "jpg.webp");
  setCategory("romance", "recent", 6, "jpg.webp");
  setCategory("romance", "trend", 6, "jpg.webp");

  const reviewCommentData = [
    {
      name: "Chris Curry",
      time: 1,
      comment:
        'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
    },
    {
      name: "Lewis Mann",
      time: 5,
      comment: "Finally it came out ages ago",
    },
    {
      name: "Louis Tyler",
      time: 20,
      comment: "Where is the episode 15 ? Slow update! Tch",
    },
    {
      name: "Chris Curry",
      time: 1,
      comment:
        'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
    },
    {
      name: "Lewis Mann",
      time: 5,
      comment: "Finally it came out ages ago",
    },
    {
      name: "Louis Tyler",
      time: 20,
      comment: "Where is the episode 15 ? Slow update! Tch",
    },
  ];
  function setDataForReview() {
    for (let i = 0; i < reviewCommentData.length; i++) {
      $(".deltails__review .review__item__img img")
        .eq(i)
        .prop("src", `/asset/img/review/review-${i + 1}.webp`);
      $(".deltails__review .item__info__name")
        .eq(i)
        .text(reviewCommentData[i].name);
      $(".deltails__review .item__info__comment")
        .eq(i)
        .text(reviewCommentData[i].comment);
      $(".deltails__review .item__info__time")
        .eq(i)
        .text(reviewCommentData[i].time);
    }
  }
  setDataForReview();

  const blogData = [
    {
      name: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    },
    {
      name: "Bok no Hero Academia Season 4 – 18",
    },
    {
      name: "Fate/Stay Night: Untimated Blade World",
    },
    {
      name: "Housekishou Richard shi no Nazo Kantei Season 08 - 20",
    },
    {
      name: "Fate/Stay Night: Untimated Blade World",
    },
    {
      name: "Building a Better LiA Drilling Down",
    },
    {
      name: "Fate/Stay Night: Untimated Blade World",
    },
    {
      name: "Building a Better LiA Drilling Down",
    },
    {
      name: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    },
    {
      name: "Bok no Hero Academia Season 4 – 18",
    },
    {
      name: "Fate/Stay Night: Untimated Blade World",
    },
    {
      name: "Yuri Kuma Arashi Viverra Tortor Pharetra",
    },
  ];
  function setDataForBlog() {
    for (let i = 0; i < 12; i++) {
      $(".blog__content .col-blog__item")
        .eq(i)
        .find(".blog__item__name")
        .text(blogData[i].name);
    }
    for (let i = 0; i < 8; i++) {
      $(".blog__content .col-sm-6.col-blog__item")
        .eq(i)
        .children(".blog__item")
        .css({
          "background-image":
            "url(" + `/asset/img/blog/blog-s-${i + 1}.jpg.webp` + ")",
          height: "285px",
        });
        $(".blog__content .col-sm-6.col-blog__item")
        .eq(i)
        .find(".blog__item__name")
        .css("font-size","2rem");
    }
    for (let i = 0; i < 4; i++) {
      $(".blog__content .col-lg-12.col-blog__item")
        .eq(i)
        .children(".blog__item")
        .css(
          "background-image",
          "url(" + `/asset/img/blog/blog-b-${i + 1}.jpg.webp` + ")"
        );
    }
  }

  setDataForBlog();
});
