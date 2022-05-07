/***
 * Get Siblings
 * @param elem
 * @returns {[]}
 */
export const getSiblings = (elem) => {
  let siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/***
 * Slide up effect
 * @param element
 * @param duration
 * @returns {Promise<unknown>}
 */
export const slideUp = (element, duration = 500) => {
  return new Promise(function (resolve, reject) {
    element.style.height = element.offsetHeight + "px";
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
      resolve(false);
    }, duration);
  });
};

/***
 * Slide down effect
 * @param element
 * @param duration
 * @returns {Promise<unknown>}
 */
export const slideDown = (element, duration = 500) => {
  return new Promise(function (resolve, reject) {
    element.style.removeProperty("display");
    let display = window.getComputedStyle(element).display;

    if (display === "none") display = "block";

    element.style.display = display;
    let height = element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight;
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    element.style.height = height + "px";
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
    }, duration);
  });
};

/***
 * Slide toggle effect
 * @param element
 * @param duration
 * @returns {Promise<unknown>}
 */
export const slideToggle = (element, duration = 500) => {
  if (window.getComputedStyle(element).display === "none") {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
};

/***
 * Get element's closest cart-product
 * @param elem
 * @param selector
 * @returns {null|*}
 */
export const getClosest = (elem, selector) => {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        let matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};

/***
 * Flat Array
 * @param arr
 * @param d
 * @returns {*}
 */
export const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
};

/***
 * Range
 * @param start
 * @param end
 * @param interval
 * @returns {[]}
 */
export const range = (start, end, interval) => {
  let ans = [];
  let result = [];
  for (let i = start; i <= end; i += interval) {
    ans.push(i);
  }
  ans.shift();
  let lastValue;
  ans.map((i, index) => {
    result.push(`${index === 0 ? 0 : i - interval + 1} - ${i}`);
    lastValue = [...ans.values()].pop();
  });
  result.push(`${lastValue + 1} - ${end}`);

  return result;
};

/***
 * Array sorted by character wise
 * @param arr
 */
export const arrSortByCharacter = (arr) => {
  return arr.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

/**
 * Check Float Number
 * @param n
 * @returns {boolean}
 */
export const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
};

/**
 * Capitalize World
 * @param word
 * @returns {string}
 */
export const toCapitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/***
 * Content Excerpt
 * @param content
 * @param limit
 * @returns {*}
 */

export const excerpt = (content, limit = 30) => {
  return content.split(" ").slice(0, limit).join(" ");
};

/***
 * Format Date [mm-dd-yyyy]
 * @param date
 * @returns {string}
 */

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (day.length < 2) day = "0" + day;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${months[month]}, ${year}`;
};

/**
 * Get Total Days Count
 * @param {any} date
 * @returns {number}
 */
export const totalDays = (date) => {
  const dt1 = new Date();
  const dt2 = new Date(date);
  const oneDay = 24 * 60 * 60 * 1000;
  let diff = dt1 - dt2;

  return Math.abs(Math.round(diff / oneDay));
};

const decoding = (text, decodeType) => {
  try {
    return decodeType(text);
  } catch (e) {
    return text;
  }
};

/**
 * Parse Context Cookie
 * @param {any} text
 * @param {any} options
 * @returns {any}
 */

export const getCookieFromContext = (text, options) => {
  var pairSplitRegExp = /; */;
  var decode = decodeURIComponent;
  var value = {};
  var value = options || {};
  var pairs = text?.split(pairSplitRegExp) ?? [];
  var dec = value.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var idx = pair.indexOf("=");

    if (idx < 0) {
      continue;
    }

    var key = pair.substr(0, idx).trim();
    var val = pair.substr(++idx, pair.length).trim();

    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    if (undefined == value[key]) {
      value[key] = decoding(val, dec);
    }
  }

  return value;
};
