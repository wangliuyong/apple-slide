$(()=>{

    !function slides(){
        let $slideWrapper = $('.slideWrapper');
        let $buttonWrapper = $('main>ul');
        let $buttons = $buttonWrapper.children();
        let index = 0;

        for (let i = 0; i < $buttons.length; i++) {
            $($buttons[i]).on('click', (e) => {
                index = $(e.currentTarget).index();
                $slideWrapper.css({ transform: `translateX(${index * -920}px)` });

                $buttons.eq(index).addClass('active').siblings('li.active').removeClass('active');

            })
        }

        $('ul>li>a').on('click', (e) => {
            e.preventDefault();
        })
    }.call();
})