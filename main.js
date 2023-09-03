////////////////////////MAP STARTS

////////////////////////MAP ENDS

////////////////////////CATALOG STARTS
// Get each catalog menu item
const tab1 = document.getElementById('1-content');
const tab2 = document.getElementById('2-content');
const tab3 = document.getElementById('3-content');

const catalogMenuItems = document.querySelectorAll('.catalog-menu-item');
catalogMenuItems.forEach(item => {
  item.addEventListener('click', function() {
    const currentlyActive = document.querySelector('.catalog-menu-item.active');

    if (currentlyActive) {
      // Remove styles from the previously clicked element
      currentlyActive.classList.remove('active');
      currentlyActive.style.cssText = '';
    }

    // Apply styles to the clicked element
    this.classList.add('active');
    this.style.fontSize = '24px';
    this.style.fontWeight = 'bold';
    this.style.color = 'rgb(50, 50, 138)';
    this.style.textTransform = 'uppercase';
    this.style.cursor = 'pointer';
    this.style.opacity = '1';
  });
});


// Add click event listener to each tab
tab1.addEventListener('click', () => {
	const elem = document.getElementsByClassName("trdelnik-menu")[0];
	elem.style.display = "unset";
	elem.style.opacity = "1";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
});
tab2.addEventListener('click', () => {
	const elem = document.getElementsByClassName("chimni-dogi-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
});
tab3.addEventListener('click', () => {
	const elem = document.getElementsByClassName("sandwiches-menu")[0];
	elem.style.display = "unset";
	document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
	document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
});

document.getElementsByClassName("trdelnik-menu")[0].style.display = "none";
document.getElementsByClassName("chimni-dogi-menu")[0].style.display = "none";
document.getElementsByClassName("sandwiches-menu")[0].style.display = "none";
///////////////////////////CATALOG ENDS

/////////////////////////////////////////////////////////////////////////
// ...
