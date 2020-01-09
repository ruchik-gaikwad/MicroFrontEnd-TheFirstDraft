function tellComponents() {
    const name = "Basav" 

    const reactEl = document.createElement('react-el');
    reactEl.setAttribute('name', name)
    // reactEl.setAttribute('onHelloEvt', 'onHelloEvt');
    // reactEl.addEventListener('onHelloEvt', (e) => )

    const reactElContainer =  document.getElementById('react-container');
    console.log(reactElContainer)

    reactElContainer.appendChild(reactEl);

    const ngEl = document.createElement('ng-el');

    const ngElContainer = document.getElementById('angular-container');

    ngElContainer.appendChild(ngEl)


}

tellComponents()