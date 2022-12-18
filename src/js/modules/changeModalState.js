import checkNumInputs from './checkNumInputs';

const cachedModuleState = (state, btnsData) => {

    const  windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowWidth = document.querySelectorAll('#width'),
            windowHeight = document.querySelectorAll('#height'),
            windowType = document.querySelectorAll('#view_type'),
           windowProfile = document.querySelectorAll('.checkbox'),
           btns = document.querySelectorAll(btnsData);

    
        checkNumInputs('#width');
        checkNumInputs('#height');

        btns.forEach((item) => {
            item.style.display = 'none';
        });



         function showNextBtn(item) {
            let el = item.nextElementSibling;
            while (el) {
             if (el.nodeName == 'BUTTON'){
                 el.style.display = '';
                 break;                               
             }
             el = el.nextElementSibling;
           }
         }   
/* 


        if (state['width'] == 0 || state['height'] == 0) {
            el.style.display = 'none';
        }else {
            el.style.display = '';
        }
 */

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item , i) => {

            
            item.addEventListener (event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Hot';
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;   
                }

                if (state['width'] !== '' && state['height'] !== ''){
                    showNextBtn(item);
                }

                if (state['profile'] !== ''){
                    document.querySelector('.popup_calc_profile_button').style.display = '';
                }
                console.log(state);
            });
        });
    }
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default cachedModuleState;

