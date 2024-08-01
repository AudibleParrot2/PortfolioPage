//FAQ ACCORDION
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');

        groupBody.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    })
});

//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const faqMenu = document.querySelectorAll('.set-link');
    faqMenu.forEach(faqMenus => {
        faqMenus.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            faqMenus.classList.add('active');
        })
    })
})


/*SKILLS*/
const skillsData = [
    {
        id: 1,
        category: "Code",
        question: "Code question number 1?",
        answer: "Answer of code question number 1"
    },

    {
        id: 2,
        category: "Code",
        question: "Code question number 2?",
        answer: "Answer of code question number 2"
    },

    {
        id: 3,
        category: "Code",
        question: "Code question number 3?",
        answer: "Answer of code question number 3"
    },

    {
        id: 4,
        category: "Code",
        question: "Code question number 4?",
        answer: "Answer of code question number 4"
    },

    {
        id: 5,
        category: "Game Design",
        question: "Game design question number 1?",
        answer: "Answer of game design question number 1"
    },

    {
        id: 6,
        category: "Game Design",
        question: "Game design question number 2?",
        answer: "Answer of game design question number 2"
    },

    {
        id: 7,
        category: "Game Design",
        question: "Game design question number 3?",
        answer: "Answer of game design question number 3"
    },

    {
        id: 8,
        category: "Game Design",
        question: "Game design question number 4?",
        answer: "Answer of game design question number 4"
    },

    {
        id: 9,
        category: "Art",
        question: "Art question number 1?",
        answer: "Answer of art question number 1"
    },
    
    {
        id: 10,
        category: "Art",
        question: "Art question number 2?",
        answer: "Answer of art question number 2"
    },

    {
        id: 11,
        category: "Art",
        question: "Art question number 3?",
        answer: "Answer of art question number 3"
    },

    {
        id: 12,
        category: "Art",
        question: "Art question number 4?",
        answer: "Answer of art question number 4"
    }
]

const skillsContainer = document.querySelector('.faq-content');
const switchSkills = document.querySelectorAll('li')

window.addEventListener("DOMContentLoaded", () => {
    
    displaySkillsData(skillsData);

})

switchSkills.forEach((filters) => {
    filters.addEventListener('click', (f) => {
        const category = f.target.dataset.id;
        const skillCategory = skillsData.filter(function (data) {
            if (data.category === category) {
                return data;
            }
        })
        if (category === "Code") {
            displaySkillsData(skillCategory);
        }
        if (category === "Game Design") {
            displaySkillsData(skillCategory);
        }
        else {
            displaySkillsData(skillCategory);
        }
    })
})

function displaySkillsData(skillz) {
    let displayData = skillz.map(function (cat_items) {
        return `<div class="faq-group">
                    <div class="faq-group-header">
                        <h4 class="text-md">
                            ${cat_items.question}
                        </h4>
                        <i class="fas fa-minus"></i>
                    </div>
                    <div class="faq-group-body">
                    ${cat_items.answer}
                    </div>
                </div>`;
    })

    displayData = displayData.join("");
    skillsContainer.innerHTML = displayData;
}