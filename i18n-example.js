// Set global WP i18n functions to local variables.
const {__, _n, _x, sprintf} = wp.i18n;

// Grab our container to put our text inside.
const outputContainer = document.getElementById('i18n-js-examples');

// List all our strings in an array. For this example, the use of an array is purely for ease of output.
const strings = [
    __('You\'re a silly monkey', 'i18n-example'),
    /* translators: %d is the users age. */
    sprintf(__('I am %d years old', 'i18n-example'), 29),
    _x('Post', 'verb', 'i18n-example'),
    sprintf(_n('I have %s book', 'I have %s books', 1, 'i18n-example'), 1),
    sprintf(_n('I have %s book', 'I have %s books', 4, 'i18n-example'), 4),
    sprintf(_n('I have %s book', 'I have %s books', 25, 'i18n-example'), 25),
    __('In JS only', 'i18n-example'),
];

// Concatenate all our strings with HTML breaks and output to our container.
outputContainer.innerHTML = strings.join('<br/>');