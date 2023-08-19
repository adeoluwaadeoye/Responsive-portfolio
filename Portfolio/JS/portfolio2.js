/*-----------Show skills tabs--------- */
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(content => {
            content.classList.remove('skills_active');
        });

        target.classList.add('skills_active');

        tabs.forEach(t => {
            t.classList.remove('skills_active');
        });

        tab.classList.add('skills_active');
    });
});

/*----MIXITUP FILTER PORTFOLIO */
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===========LINK  ACTIVE WORK=============*/
const linkWork = document.querySelectorAll('.work_item');

function activeWork() {
    linkWork.forEach(link => link.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(link => link.addEventListener("click", activeWork));

/*======WORK POPUP======= */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

/*===================SERVICES MODAL========== */
const modalViews = document.querySelectorAll('[services_modal]');
const modalBtns = document.querySelectorAll('[services_button]');
const modalCloses = document.querySelectorAll('[services_modal-close]');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*------swipper testimonial------------*/
let swiper = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        5756: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});


