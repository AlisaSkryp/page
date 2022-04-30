(function() {
    const DROP_DOWN_CLASS = 'dropdown'
    const DROP_DOWN_INPUT_CLASS = 'dropdown__input'
    const DROP_DOWN_OPTIONS_CLASS = 'dropdown__option'
    const DROPDOWN_OPENED_CLASS = 'dropdown--opened'


    function initializeDropdowns() {
        let dropDowns = document.getElementsByClassName(DROP_DOWN_CLASS);
        console.log(dropDowns);
        for (var dropDown of dropDowns) {
            initializeDropdown(dropDown)
        }
    }


    function initializeDropdown(dropDown) {
        console.log('Initializing dd', dropDown)

        let inputElements = dropDown.getElementsByClassName(DROP_DOWN_INPUT_CLASS);

        if (inputElements.length != 1) {
            console.log('Just one dropdown input allowed')
            return
        }


        let inputElement = inputElements[0]
        console.log(inputElement)

        let toggleDropdown = () => {
            dropDown.classList.toggle(DROPDOWN_OPENED_CLASS);
        }


        inputElement.addEventListener('click', toggleDropdown)
        for (var option of dropDown.getElementsByClassName(DROP_DOWN_OPTIONS_CLASS)) {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                inputElement.value = e.target.innerHTML;
                toggleDropdown();
            })

        }
    }

    initializeDropdowns();

})()