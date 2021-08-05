$('.toggle-modal').on('click', (e) => {
    $(`#${e.target.dataset.comment}`).addClass("is-active");
});

$('.delete').on('click', (e) => {
    $('.modal').removeClass("is-active");
});