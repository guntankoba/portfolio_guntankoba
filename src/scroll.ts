import { DirectiveOptions } from 'vue'

const scroll: DirectiveOptions = {
    inserted(el, binding) {
        let f = function (evt: Event) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
};

export default scroll;
