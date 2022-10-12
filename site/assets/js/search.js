(() => {
  'use strict';

  let idx = null;
  let documents = null;
  let searchText = '';
  let isIndexing = false;

  function hideSearchingStatus(hidden) {
    let loader = document.querySelector('#searchLoading');
    if (hidden) {
      loader.classList.add('visually-hidden');
    } else {
      loader.classList.remove('visually-hidden');
    }
  }
  function fetchDocuments(cb) {
    if (documents) {
      cb(documents);
      return;
    }
    isIndexing = true;
    hideSearchingStatus(false);
    fetch('/index.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        cb(data);
      });
  }

  function highlightTokens(element, tokens) {
    const nodeFilter = {
      acceptNode: function (node) {
        return NodeFilter.FILTER_ACCEPT;
      },
    };
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, nodeFilter, false);
    let node = null;

    while ((node = walker.nextNode())) {
      const text = node.textContent.toLowerCase();
      let found = false;
      for (var i = 0; i < tokens.length && !found; i++) {
        const token = tokens[i].toString();
        const startIndex = text.indexOf(token);
        if (startIndex == -1) {
          continue;
        }
        let range = document.createRange();
        range.setStart(node, startIndex);
        range.setEnd(node, startIndex + token.length);
        let mark = document.createElement('mark');
        range.surroundContents(mark);
        found = true;
      }
      walker.nextNode();
    }
  }

  function createEmptyResultElement() {
    var $blankslate = document.createElement('div');
    $blankslate.classList.add('blankslate');
    var $h2 = document.createElement('h2');
    $h2.classList.add('blankslate-heading');
    $h2.innerHTML = `No results for "${input}"`;
    $blankslate.appendChild($h2);
    return $blankslate;
  }
  function searchQuery(input) {
    var results = idx.query(function (query) {
      query.term(idx.pipeline.run(lunr.tokenizer(input)), { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING });
    });
    var $listContainer = document.querySelector('#searchModal .modal-body');
    if (results.length == 0) {
      $listContainer.innerHTML = createEmptyResultElement().outerHTML;
      return;
    }

    var $listGroup = document.createElement('div');
    $listGroup.classList.add('list-group');
    $listGroup.id = 'docsearch-list';
    results.slice(0, 30).forEach((item) => {
      let doc = documents.filter((k) => k.objectID === item.ref)[0];
      var $item = document.createElement('a');
      $item.href = doc['link'];
      $item.id = `docsearch-item-${doc['objectID']}`;
      $item.classList.add('list-group-item', 'list-group-item-action');
      let $title = document.createElement('div');
      $title.innerText = doc['title'];
      highlightTokens($title, lunr.tokenizer(input));
      $item.appendChild($title);
      $listGroup.appendChild($item);
    });
    $listContainer.innerHTML = $listGroup.outerHTML;
  }

  function search(input) {
    searchText = input;
    if (searchText == '') {
      var $listContainer = document.querySelector('#searchModal .modal-body');
      $listContainer.innerHTML = '';
      return;
    }
    if (isIndexing) {
      return;
    }
    fetchDocuments((data) => {
      documents = data;
      var builder = new lunr.Builder();
      builder.ref('objectID');
      builder.field('title', { boost: 5 });
      builder.field('link', {
        boost: 2,
        extractor: function (doc) {
          return doc['link'].replace(/\//g, ' ').trim();
        },
      });
      builder.metadataWhitelist = ['position'];
      documents.forEach((doc) => {
        builder.add(doc);
      });
      idx = builder.build();
      isIndexing = false;
      hideSearchingStatus(true);
      if (search == '') {
        return;
      }
      searchQuery(searchText);
    });
  }

  const searchInput = document.querySelector('#search-input');
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      return;
    }
    search(searchInput.value);
  });
})();
