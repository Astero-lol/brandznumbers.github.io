(() => {
    const $block = document.querySelector('.our-services');

    const $items = $block ? $block.querySelectorAll('.our-services__block') : [];

    $items.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle('our-services__block_active')
    }))
})();
