const tagsEL = document.getElementById('tags'); //div element
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
      randomeSelect();
    }, 100);
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEL.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEL.appendChild(tagEl);
  });
}

function randomeSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlight(randomTag);

    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const randomTag = pickRandomTag();
    highlight(randomTag);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add('highlight');
}

function unHighlight(tag) {
  tag.classList.remove('highlight');
}
