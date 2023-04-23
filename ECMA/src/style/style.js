// $('input.input-qty').each(function() {
//     var $this = $(this),
//     qty = $this.parent().find('.is-form'),
//     min = Number($this.attr('min')),
//     max = Number($this.attr('max'))
//     if (min == 0) {
//     var d = 0
//     } else d = min
//     $(qty).on('click', function() {
//     if ($(this).hasClass('minus')) {
//         if (d > min) d += -1
//     } else if ($(this).hasClass('plus')) {
//         var x = Number($this.val()) + 1
//         if (x <= max) d += 1
//     }
//     $this.attr('value', d).val(d)
//     })
//     })


    const parentContainer =  document.querySelector('.read-more-container');
    parentContainer.addEventListener('click', event=>{
        const current = event.target;
        const isReadMoreBtn = current.className.includes('read-more-btn');
        if(!isReadMoreBtn) return;
        const currentText = event.target.parentNode.querySelector('.read-more-text');
        currentText.style.display = 'block';
    })

    const click =  document.querySelector('.read-more-btn');
    click.addEventListener('click', event=>{
        const current = event.target;
        const isReadMoreBtn = current.className.includes('read-more-btn');
        if(!isReadMoreBtn) return;
        const currentText = event.target.parentNode.querySelector('.read-more-text');
        currentText.style.display = 'block';
    })
export default content