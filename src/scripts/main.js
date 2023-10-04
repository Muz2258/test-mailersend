"use strict";

document.querySelector("#menu").addEventListener("click", function () {
	const nav = document.querySelector("nav");

	nav.classList.toggle("open");
});

const books = document.querySelectorAll(".book__simple");

// Loop through book elements
for (const [i, book] of books.entries()) {
	// Add 'mouseover' event listener
	book.addEventListener("mouseover", function () {
		// Get classlist of active book
		const cls = book.classList;

		// Loop through classlis of active book
		for (const c of cls) {
			// Set book size
			if (c.includes("size")) cls.replace(c, "size-selected");
		}

		// Get classlist of book image (first child element of book)
		const childCls = book.firstElementChild.classList;

		// Loop through classlist of book image
		for (const cl of childCls) {
			// Set book image shadow
			if (cl.includes("shadow")) childCls.replace(cl, "shadow__selected");
		}

		// Loop through book elements on event
		for (const [e, b] of books.entries()) {
			// Get classlist of element
			const cl = b.classList;

			if (e !== i) {
				// Action that occurs if event is not on element

				// Get element's first child's classlist
				const ccl = b.firstElementChild.classList;

				// Loop through classes of child element
				// set appropriate shadow class
				for (const c of ccl) {
					if (c.includes("shadow")) {
						if (e < i) {
							ccl.replace(c, "shadow__left");
						} else if (e > i) {
							ccl.replace(c, "shadow__right");
						}
					}
				}
			}

			// Action that occurs if element index
			// is less or greater than index of element with event
			if (e < i) {
				// If less than
				// loop through element classlist
				// add appropriate size class
				for (const c of cl) {
					if (c.includes("size")) {
						cl.replace(c, `size-${i - e}`);
					}
				}
			} else if (e > i) {
				// If greater than
				// loop through element classlist
				// add appropriate size class
				for (const c of cl) {
					if (c.includes("size")) {
						cl.replace(c, `size-${e - i}`);
					}
				}
			}
		}
	});
}
