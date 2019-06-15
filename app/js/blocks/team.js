(() => {
    const $block = document.querySelector('.team');
    const $modal = document.querySelector('.team__modal');

    const $items = $block ? $block.querySelectorAll('.team__item') : [];

    $items.forEach(item => item.addEventListener('click', () => {
        const modalBigContent = new tingle.modal();

        modalBigContent.open();
        modalBigContent.setContent(document.querySelector('.team__modal').innerHTML);

        const $person = document.querySelector(`.${item.getAttribute('data-person')}`);
        $person.scrollIntoView()
    }))
})();
